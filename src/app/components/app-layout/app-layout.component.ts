import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  ViewChild,
  ContentChildren,
  ContentChild,
  Query
} from '@angular/core';
import { NavbarContentComponent } from './navbar-content/navbar-content.component';
import { SidenavContentComponent } from './sidenav-content/sidenav-content.component';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'ffdc-app-layout',
  styleUrls: ['./app-layout.component.scss'],
  templateUrl: './app-layout.component.html',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-layout'
  }
})
export class AppLayoutComponent implements OnInit {
  @ContentChild(NavbarContentComponent, { static: false }) navbarContent: NavbarContentComponent | undefined;
  @ContentChild(SidenavContentComponent, { static: false }) sidenavContent: SidenavContentComponent | undefined;
  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav | undefined;

  constructor() {}

  ngOnInit() {}

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
}
