import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, EMPTY, throwError, BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, filter, take, switchMap } from 'rxjs/operators';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;

  // Refresh Token Subject tracks the current token, or is null if no token is currently
  // available (e.g. refresh pending).
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (this.refreshTokenInProgress && req.url === '/refresh_token') {
          // if it can not refresh_token with error 401. It will do logout.
          window.location.href = '/logout';
        }

        if (error && error.status === 401) {
          if (this.refreshTokenInProgress) {
            // If refreshTokenInProgress is true, we will wait until refreshTokenSubject has a non-null value
            // – which means the new token is ready and we can retry the request again
            return this.refreshTokenSubject.pipe(
              filter(result => result !== null),
              take(1),
              switchMap(() => next.handle(req))
            );
          } else {
            this.refreshTokenInProgress = true;
            // Set the refreshTokenSubject to null so that subsequent API calls will wait until the new token has been retrieved
            this.refreshTokenSubject.next(null);
            return this.auth.refreshToken().pipe(
              switchMap(() => {
                // When the call to refreshToken completes we reset the refreshTokenInProgress to false
                // for the next time the token needs to be refreshed
                this.refreshTokenInProgress = false;
                this.refreshTokenSubject.next({});
                return next.handle(req);
              }),
              catchError(err => {
                this.refreshTokenInProgress = false;
                return throwError(err);
              })
            );
          }
        }
        return throwError(error);
      })
    );
  }
}
