import { Injectable } from '@angular/core';
import {
  ExtendedDetaildedAccount,
  AccountOverview,
  AccountBalance,
  AccountEntity,
  AllAccountsOverview,
  AccountInterestPaid,
  AccountDetail
} from '../store/models';

@Injectable({ providedIn: 'root' })
export class AccountService {
  constructor() {}

  getAccountOverview(account: AccountEntity): AccountOverview {
    const extendAccount = account as ExtendedDetaildedAccount;
    const currentBalance: AccountBalance | undefined = extendAccount.balances
      ? extendAccount.balances.find(balence => balence.type === 'current')
      : undefined;
    const avaibleBalance: AccountBalance | undefined = extendAccount.balances
      ? extendAccount.balances.find(balence => balence.type === 'available')
      : undefined;
    const accountNumber: string = extendAccount.accountNumber ? extendAccount.accountNumber : '';

    return {
      nickname: account.nickname,
      currentBalance: currentBalance ? currentBalance.amount : 0,
      availableBalance: avaibleBalance ? avaibleBalance.amount : 0,
      accountNumber
    };
  }

  getAccountInterestPaid(account: AccountEntity): AccountInterestPaid {
    const extendAccount = account as ExtendedDetaildedAccount;
    const interestThisYear: AccountDetail | undefined = extendAccount.details
      ? extendAccount.details.find(detail => detail.label === 'Interest Paid Year to Date')
      : undefined;
    const interestLastYear: AccountDetail | undefined = extendAccount.details
      ? extendAccount.details.find(detail => detail.label === 'Interest Paid Last Year')
      : undefined;
    return {
      interestThisYear: interestThisYear ? interestThisYear.value : '$0.00',
      interestLastYear: interestLastYear ? interestLastYear.value : '$0.00'
    };
  }

  getAllAcountOverview(accounts: AccountEntity[]): AllAccountsOverview {
    let current = 0;
    let available = 0;
    for (const account of accounts) {
      const extendAccount = account as ExtendedDetaildedAccount;
      const currentBalance: AccountBalance | undefined = extendAccount.balances
        ? extendAccount.balances.find(balence => balence.type === 'current')
        : undefined;
      const avaibleBalance: AccountBalance | undefined = extendAccount.balances
        ? extendAccount.balances.find(balence => balence.type === 'available')
        : undefined;

      current += currentBalance ? currentBalance.amount : 0;
      available += avaibleBalance ? avaibleBalance.amount : 0;
    }

    return { available, current };
  }
}
