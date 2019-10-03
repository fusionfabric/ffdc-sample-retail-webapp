import { loadExtendedAccounts } from '../actions/account.actions';

export interface AccountSummary {
  accountId: string;
  formattedAccountNumber: string;
  accountType: string;
  nickname: string;
  loadedExtend?: boolean;
  loadedDetail?: boolean;
}

export interface ExtendedAccount extends AccountSummary {
  balances: AccountBalance[];
  accountNumber: string;
  alternateAccountNumber: string;
  coreComponents: {
    number: string;
    type: string;
    subtype: string;
    suffix: string;
  };
  micr: string;
  openDate: string;
  privileges: {
    internalTransferFromAllowed: boolean;
    internalTransferToAllowed: boolean;
    rdcAllowed: boolean;
    c2cSendAllowed: boolean;
    c2cReceiveAllowed: boolean;
    p2pSendAllowed: boolean;
    p2pReceiveAllowed: boolean;
    externalTransferSendAllowed: boolean;
    externalTransferReceiveAllowed: boolean;
    loanTransferFromAllowed: boolean;
    loanTransferToAllowed: boolean;
    statementDeliveryAllowed: boolean;
    stopPaymentAllowed: boolean;
    textBankingFromAllowed: boolean;
    textBankingToAllowed: boolean;
    achAllowed: boolean;
    wiresAllowed: boolean;
    billPayAllowed: boolean;
    displayHistoryAllowed: boolean;
    displayBalanceAllowed: boolean;
    alertsAllowed: boolean;
    transferCrossEntityAllowed: boolean;
    checkStatusAllowed: boolean;
    checkWithdrawalAllowed: boolean;
    orderChecksAllowed: boolean;
    picturePayAllowed: boolean;
    balanceVerificationRequired: boolean;
    sweepTransfersAllowed: boolean;
    federalTaxPaymentsAllowed: boolean;
  };
  isAsset: boolean;
  isLiability: boolean;
  branchNumber: string;
}

export interface ExtendedDetaildedAccount extends ExtendedAccount {
  details: AccountDetail[];
  statementDeliveryOption: string;
  statementDeliveryEmail: Address[];
  statementDeliveryEnrollmentTime: string;
  ownerName: string;
  ownerAddress: OwnerAddress;
}

export interface AccountBalance {
  type: string;
  amount: number;
}

export interface Address {
  address: string;
  emailType: 'primary';
}

export interface OwnerAddress {
  streetLine_1: string;
  streetLine_2: string;
  streetLine_3: string;
  city: string;
  state: string;
  country: string;
  province: string;
  postalCode: string;
  postalCodeExtension: string;
  addressType: string;
}

export interface AccountDetail {
  value: string;
  label: string;
}

export type AccountEntity = AccountSummary | ExtendedAccount | ExtendedDetaildedAccount;

export interface AccountOverview {
  nickname: string;
  currentBalance: number;
  availableBalance: number;
  accountNumber: string;
}
export interface AccountInterestPaid {
  interestThisYear: string;
  interestLastYear: string;
}

export interface AllAccountsOverview {
  available: number;
  current: number;
}

