import { HttpClient } from '@angular/common/http';
import { User } from './store/models/user';
import { AuthService } from './services';

export function setupApplication(authService: AuthService) {
  return (): Promise<any> => {
    return authService.getUserInfo().then(user => authService.user = user);
  };
}
