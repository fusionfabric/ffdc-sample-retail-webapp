import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  AccountTransaction,
  AccountTransactionFilter,
  AccountTransactionDetail,
  UpdatedAccountTransaction,
  AccountTransactionSavedImage,
  AccountTransactionCheckedImage
} from '../store/models';
import { ROOT_API } from './config';

@Injectable({ providedIn: 'root' })
export class AccountTransactionApiService {
  constructor(private httpClient: HttpClient) {}

  searchAccountTransactions(accountId: string, filter: AccountTransactionFilter): Observable<AccountTransaction[]> {
    const params = new HttpParams();
    if (filter.startDate) {
      params.append('startDate', filter.startDate);
    }
    let url = `${ROOT_API}/accounts/${accountId}/transactions?startDate=${filter.startDate}`;
    if (filter.endDate) {
      params.append('endDate', filter.endDate);
      url += `&endDate=${filter.endDate}`;
    }
    if (filter.limit) {
      params.append('limit', filter.limit.toString(0));
    }
    if (filter.offset) {
      params.append('limit', filter.offset.toString(0));
    }
    return this.httpClient.get<AccountTransaction[]>(url, {
      params
    });
  }

  getAccountTransactionDetail(accountId: string, transactionId: string): Observable<AccountTransactionDetail[]> {
    return this.httpClient.get<AccountTransactionDetail[]>(
      `${ROOT_API}/accounts/${accountId}/transactions/${transactionId}`
    );
  }

  updateAccountTransaction(
    accountId: string,
    transactionId: string,
    updateAccountTransaction: UpdatedAccountTransaction
  ): Observable<any> {
    return this.httpClient.patch<any>(
      `${ROOT_API}/accounts/${accountId}/transactions/${transactionId}`,
      updateAccountTransaction
    );
  }

  getSavedImageAccountTransaction(accountId: string, transactionId: string): Observable<AccountTransactionSavedImage> {
    return this.httpClient.get<AccountTransactionSavedImage>(
      `${ROOT_API}/accounts/${accountId}/transactions/${transactionId}/transactionImage`
    );
  }

  getCheckedImageAccountTransaction(
    accountId: string,
    transactionId: string
  ): Observable<AccountTransactionCheckedImage> {
    return this.httpClient.get<AccountTransactionCheckedImage>(
      `${ROOT_API}/accounts/${accountId}/transactions/${transactionId}/checkImage`
    );
  }
}
