import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD';
export function dateFormat(date: Date): string {
  return moment(date).format(DATE_FORMAT);
}

export function compareDate(dateA: string, dateB: string): number {
  return moment(dateA, DATE_FORMAT).isBefore(moment(dateB, DATE_FORMAT)) ? 1 : -1;
}
