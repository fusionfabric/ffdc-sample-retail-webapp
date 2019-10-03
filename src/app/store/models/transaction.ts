import { HttpParams } from '@angular/common/http';

export interface AccountTransaction {
  id: string;
  accountId: string;
  transactionDate: string;
  transactionAmount: number;
  runningBalance: number;
  pending: boolean;
  debit: boolean;
  checkImage: string;
  checkNumber: number;
  description: string;
  description2: string;
  transactionCategory: string;
  markAttended: boolean;
}
export interface AccountTransactionDetail {
  value: string;
  label: string;
}

export interface AccountTransactionSavedImage {
  imageName: string;
  imageData: string;
}

export interface AccountTransactionCheckedImage {
  front: string;
  back: string;
}

export interface UpdatedAccountTransaction {
  markAttended: boolean;
}

export interface AccountTransactionFilter {
  startDate?: string; // Format (YYYY-MM-DD)
  endDate?: string;
  offset?: number;
  limit?: number;
}
