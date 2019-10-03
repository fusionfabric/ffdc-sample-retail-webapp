import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ffdc-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
