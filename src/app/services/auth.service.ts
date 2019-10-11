import { Injectable } from '@angular/core';
import { User } from '../store/models/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {

  user: User | undefined;

  constructor(private httpClient: HttpClient) {}

  getUserName() {
    return this.user ? this.user.username : '';
  }

  isAuthenticated() {}

  getUserInfo(): Promise<User> {
    return this.httpClient.get<User>('/api/user').toPromise();
  }

  refreshToken(): Observable<string> {
    return this.httpClient.post<string>('/refresh_token', {});
  }

}
