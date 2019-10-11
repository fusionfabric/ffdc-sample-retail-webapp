import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ffdc-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'navbar-home'
  }
})
export class NavbarHomeComponent implements OnInit {

  @Input() dense = true;

  @Input() homeUrl?: string;

  constructor() { }

  ngOnInit() {
  }

}
