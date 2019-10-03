import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';
import { AccountEntity, AccountInterestPaid, ExtendedDetaildedAccount } from '../../store/models';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'ffdc-account-detail-card',
  templateUrl: './account-detail-card.component.html',
  styleUrls: ['./account-detail-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'account-detail-card'
  }
})
export class AccountDetailCardComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  private _account!: ExtendedDetaildedAccount;
  @Input()
  public get account(): ExtendedDetaildedAccount {
    return this._account;
  }
  public set account(value: ExtendedDetaildedAccount) {
    this._account = value;
    if (value) {
      this.accountInterestPaid = this.accountService.getAccountInterestPaid(value);
    }
  }

  accountInterestPaid: AccountInterestPaid = { interestLastYear: '', interestThisYear: '' };
  constructor(private accountService: AccountService) {}

  ngOnInit() {}
}
