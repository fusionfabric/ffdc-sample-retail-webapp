import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  AccountSummary,
  ExtendedAccount,
  ExtendedDetaildedAccount,
  AccountDetail,
  AccountBalance
} from '../store/models';
import { ROOT_API } from './config';

@Injectable({ providedIn: 'root' })
export class AccountApiService {
  constructor(private httpClient: HttpClient) {}

  loadSummaryOfAccounts(): Observable<AccountSummary[]> {
    return this.httpClient.get<AccountSummary[]>(`${ROOT_API}/accounts`);
  }

  loadExtendedAccounts(): Observable<ExtendedAccount[]> {
    return this.httpClient.get<ExtendedAccount[]>(`${ROOT_API}/accounts/extended`);
  }

  loadExtendedAndDetailedAccounts(): Observable<ExtendedDetaildedAccount[]> {
    return this.httpClient.get<ExtendedDetaildedAccount[]>(`${ROOT_API}/accounts/extendedWithDetails`);
  }

  getExtendedAndDetailedForAccount(accountId: string): Observable<ExtendedDetaildedAccount> {
    return this.httpClient.get<ExtendedDetaildedAccount>(`${ROOT_API}/accounts/${accountId}`);
  }

  getAccountDetails(accountId: string): Observable<AccountDetail[]> {
    return this.httpClient.get<AccountDetail[]>(`${ROOT_API}/accounts/${accountId}/details`);
  }

  getAccountBalance(accountId: string): Observable<AccountBalance[]> {
    return this.httpClient.get<AccountBalance[]>(`${ROOT_API}/accounts/${accountId}/balances`);
  }
}
