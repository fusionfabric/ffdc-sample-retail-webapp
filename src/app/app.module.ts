import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModules } from './material-modules';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterState } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ROOT_REDUCERS } from './store/reducers';
import { AccountEffects, AccountTransactionEffects } from './store/effects';
import { setupApplication } from './app-initializer';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services';
import { TokenInterceptor } from './services/token-interceptor.service';
import { AppLayoutModule } from './components/app-layout/app-layout.module';
import { HomePageModule } from './containers/home-page/home-page.module';
import { MergedRouterStateSerializer } from './store/reducers/merged-route-serialzer';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GlobalNavModule } from '@finastra/angular-components/global-nav';
import { UxgUserProfileMenuModule } from '@finastra/angular-components/user-profile-menu';
import { AccountCardModule } from '@finastra/angular-components/cards/account-card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { AvatarModule } from '@finastra/angular-components/avatar';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomePageModule,
    AppLayoutModule,
    HttpClientModule,
    MaterialModules,
    AppRoutingModule,
    GlobalNavModule,
    UxgUserProfileMenuModule,
    AccountCardModule,
    MatIconModule, MatButtonModule, MatCardModule,
     MatDividerModule,MatTabsModule,MatSelectModule,MatInputModule,AvatarModule,

    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot([AccountEffects, AccountTransactionEffects]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
      serializer: MergedRouterStateSerializer
    }),
    StoreDevtoolsModule.instrument({
      name: 'FFDC Sample App',
      // In a production build you would want to disable the Store Devtools
      // logOnly: environment.production,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: setupApplication,
      multi: true,
      deps: [AuthService]
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
      deps: [AuthService]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
