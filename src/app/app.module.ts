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
    })
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
