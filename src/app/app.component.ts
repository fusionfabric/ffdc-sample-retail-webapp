import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { routes } from './constants';

@Component({
  selector: 'ffdc-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  appName = 'Retail App';

  navigationNodes = routes;


    constructor(private router: Router) {}
  
    nodeChosen(node : any) {
      this.router.navigate([node.path]);
    }
  
    brandAction() {
      this.router.navigate(['home']);
    }
  }
  //   this.isHomePage$ = store.pipe(
  //     select(selectRouteData),
  //     map(data => (data ? data.viewId === 'home' : false))
  //   );

  //   combineLatest(
  //     store.pipe(select(selectAllAccounts)),
  //     store.pipe(select(selectRouteParams)),
  //     store.pipe(select(selectRouteData))
  //   ).subscribe(([accounts, routeParams, routeData]) => {
  //     if (routeData) {
  //       if (routeData.viewId === 'accounts') {
  //         this.navbarMenuData = [
  //           {
  //             url: '/accounts',
  //             title: 'ACCOUNTS'
  //           }
  //         ];
  //       } else if (routeData.viewId === 'accountDetail') {
  //         const currentAccount = accounts.find(account => account.accountId === routeParams.accountId);
  //         this.navbarMenuData = [
  //           {
  //             url: '/accounts',
  //             title: 'ACCOUNTS',
  //             showOtherChildren: true,
  //             children: accounts.map(account => ({
  //               url: `/accounts/${account.accountId}`,
  //               title: `${account.nickname}`
  //             }))
  //           },
  //           {
  //             url: `/accounts/${routeParams.accountId}`,
  //             title: currentAccount ? currentAccount.nickname : ''
  //           }
  //         ];
  //       }
  //       this.cd.markForCheck();
  //     }
  //   });
  // }
  
