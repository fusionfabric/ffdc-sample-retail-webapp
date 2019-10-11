import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'ffdc-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'home-page'
  }
})
export class HomePageComponent implements OnInit {

  get userName() {
    return this.authService.getUserName();
  }

  constructor(private router: Router, private authService: AuthService) { }


  ngOnInit() {
  }

  goToAccountsPage() {
    this.router.navigateByUrl('/accounts');
  }
}
