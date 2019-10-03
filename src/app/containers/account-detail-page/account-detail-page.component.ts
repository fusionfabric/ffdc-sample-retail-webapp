import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  OnDestroy,
  ChangeDetectorRef
} from '@angular/core';
import { AccountOverview, AccountEntity } from '../../store/models';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, map, tap, filter, switchMap } from 'rxjs/operators';
import { AccountService } from '../../services/account.service';
import { AppState, selectAccountById } from '../../store/reducers';
import { Store, select } from '@ngrx/store';
import { getExtendedAndDetailedForAccount } from '../../store/actions/account.actions';

@Component({
  selector: 'ffdc-account-detail-page',
  templateUrl: './account-detail-page.component.html',
  styleUrls: ['./account-detail-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'account-detail-page'
  }
})
export class AccountDetailPageComponent implements OnInit, OnDestroy {
  acountsOverview: AccountOverview = { nickname: ' ', currentBalance: 0, availableBalance: 0, accountNumber: '' };
  account: AccountEntity | undefined ;

  private destroyed$ = new Subject<void>();
  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private accountService: AccountService
  ) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(param => param.get('accountId') || ''),
        filter(accountId => !!accountId),
        tap(accountId => this.store.dispatch(getExtendedAndDetailedForAccount({ accountId }))),
        switchMap(accountId => this.store.pipe(select(selectAccountById, { accountId }))),
        takeUntil(this.destroyed$)
      )
      .subscribe(account => {
        if (account) {
          this.acountsOverview = this.accountService.getAccountOverview(account);
          this.account = account;
          this.cd.markForCheck();
        }
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
