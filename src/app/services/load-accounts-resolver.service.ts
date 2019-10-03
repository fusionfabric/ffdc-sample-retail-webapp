import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountSummary } from '../store/models';
import { AccountApiService } from './account-api.service';
import { Observable, of } from 'rxjs';
import { take, mergeMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { AccountApiActions } from '../store/actions';

@Injectable({ providedIn: 'root' })
export class LoadAccountResolverService implements Resolve<AccountSummary[]> {
  private loaded = false;
  constructor(private accountApi: AccountApiService, private store: Store<AppState>) {

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    if (this.loaded) {
      return of([]);
    }
    return this.accountApi.loadSummaryOfAccounts().pipe(
      take(1),
      tap(accounts => {
        this.loaded = true;
        this.store.dispatch(AccountApiActions.loadSummaryOfAccountsSuccess({ accounts }));
      }),
      mergeMap(accounts => of(accounts))
    );
  }
}
