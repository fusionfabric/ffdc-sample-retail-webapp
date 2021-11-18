import { Routes } from '@angular/router';
import { HomePageComponent } from './containers/home-page/home-page.component';
import { LoadAccountResolverService } from './services/load-accounts-resolver.service';

export const routes: Routes = [
    {
      path: 'accounts',
      loadChildren: () => import('./containers/account-page/account-page.module').then(m => m.AccountPageModule),
      data: {
        viewId: 'accounts'
      },
      resolve: {
        accounts: LoadAccountResolverService
      }
    },
    {
      path: 'accounts/:accountId',
      loadChildren: () => import('./containers/account-detail-page/account-detail-page.module').then(m => m.AccountDetailPageModule),
      data: {
        viewId: 'accountDetail'
      },
      resolve: {
        accounts: LoadAccountResolverService
      }
    },
    {
      path: '',
      pathMatch: 'full',
      component: HomePageComponent,
      data: {
        viewId: 'home'
      }
    }
  ];