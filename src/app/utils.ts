import moment from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD';
export function dateFormat(date: Date, format = DATE_FORMAT): string {
  return moment(date).format(format);
}

export function compareDate(dateA: string, dateB: string): number {
  return moment(dateA, DATE_FORMAT).isBefore(moment(dateB, DATE_FORMAT)) ? 1 : -1;
}
