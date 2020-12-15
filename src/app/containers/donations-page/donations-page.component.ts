import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { AccountEntity, AllAccountsOverview } from '../../store/models';
import { Store, select } from '@ngrx/store';
import { AppState, selectAllAccounts } from '../../store/reducers';
import { AccountActions } from '../../store/actions';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AccountService } from '../../services/account.service';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'ffdc-donations-page',
  templateUrl: './donations-page.component.html',
  styleUrls: ['./donations-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'donations-page'
  }
})
export class DonationsPageComponent implements OnInit, OnDestroy {
  accounts: AccountEntity[] = [];
  allAcountsOverview: AllAccountsOverview = { current: 0, available: 0 };
  selectedAccount: any;
  donationAmmount: number = 0;
  donationInterval: number = 0;

  private destroyed$ = new Subject<any>();

  constructor(private accountService: AccountService, private store: Store<AppState>, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.store.dispatch(AccountActions.loadExtendedAndDetailedAccounts());
    this.store
      .pipe(
        select(selectAllAccounts),
        takeUntil(this.destroyed$)
      )
      .subscribe(accounts => {
        this.accounts = accounts;
       
        this.allAcountsOverview = this.accountService.getAllAcountOverview(accounts);
        this.cd.markForCheck();
      });
  }

  ngOnDestroy() {
    console.log("this.accounts", this.accounts);
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  setInterval(interval:number) {
    this.donationInterval = interval;
    console.log("donationInterval", this.donationInterval);
    console.log("donationAmmount", this.donationAmmount);
    console.log("selectedAccount", this.selectedAccount);
  }

  
}

