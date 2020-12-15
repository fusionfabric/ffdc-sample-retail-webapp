import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { AccountEntity, AccountOverview } from '../../store/models';

@Component({
  selector: 'ffdc-account-card',
  templateUrl: './account-card.component.html',
  styleUrls: ['./account-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'account-card'
  }
})
export class AccountCardComponent implements OnInit {

  @Input() account!: AccountEntity;

  accountOverview!: AccountOverview;

  constructor( private accountService: AccountService) {
  }

  ngOnInit() {
    this.accountOverview = this.accountService.getAccountOverview(this.account);
  }

}
