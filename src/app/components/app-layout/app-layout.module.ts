import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModules } from '../../material-modules';

import { AppLayoutComponent } from './app-layout.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { NavbarActionContainerComponent } from './navbar-action-container/navbar-action-container.component';
import { RouterModule } from '@angular/router';
import { NavbarActionItemComponent } from './navbar-action-item/navbar-action-item.component';

@NgModule({
  imports: [MaterialModules, CommonModule, RouterModule],
  exports: [
    AppLayoutComponent,
    SidenavContentComponent,
    NavbarContentComponent,
    NavbarMenuComponent,
    NavbarHomeComponent,
    NavbarActionContainerComponent,
    NavbarActionItemComponent
  ],
  declarations: [
    AppLayoutComponent,
    SidenavContentComponent,
    NavbarContentComponent,
    NavbarMenuComponent,
    NavbarHomeComponent,
    NavbarActionContainerComponent,
    NavbarActionItemComponent
  ],
  providers: []
})
export class AppLayoutModule {}
