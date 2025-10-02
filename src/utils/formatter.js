import { secondsToDaysHoursMinutes } from './converter';

export const localeDate = (rawDate) => {
  const createdAt = new Date(rawDate)
  createdAt.setHours(createdAt.getHours() + 3)
  return createdAt
};

export const formattedDate = (rawDate, groupedByDay) => {
  const groupDateObject = new Date(`${rawDate}${groupedByDay ? '' : '-01'}T00:00:00-03:00`);
  return groupDateObject;
};

export function formattedDateTimezone(dateString, timezone = '03') {
  let date = dateString;
  if (dateString.includes('T')) {
    [date] = dateString.split('T');
  }
  return `${date}T${timezone}:00:00Z`;
}

export const formattedHours = rawSeconds => {
  const time = secondsToDaysHoursMinutes(rawSeconds);
  return [time.H, time.m];
};

export const formattedHoursString = (rawSeconds, showInDays = false) => {
  const time = secondsToDaysHoursMinutes(rawSeconds);
  if (showInDays) {
    const days = time.d > 0 ? `${time.d} dias ` : '';
    return `${days}${time.h}:${time.m}h`;
  }
  return `${time.H}:${time.m}h`;
};

export const defaultParseDate = (newDate, hourPreset) => {
  const dateFormatted = new Date(newDate);
  if (hourPreset === 'start') dateFormatted.setHours(0, 0, 0);
  if (hourPreset === 'end') dateFormatted.setHours(23, 59, 59);
  return dateFormatted;
};

export const previousPeriodDate = (newDate, period = 'day', quantity = 1, hourPreset = null) => {
  const dateFormatted = new Date(newDate);
  if (hourPreset === 'start') defaultParseDate(dateFormatted, 'start');
  if (hourPreset === 'end') defaultParseDate(dateFormatted, 'end');
  if (period === 'day') dateFormatted.setDate(dateFormatted.getDate() - quantity);
  if (period === 'week') dateFormatted.setDate(dateFormatted.getDate() - quantity * 7);
  if (period === 'month') dateFormatted.setMonth(dateFormatted.getMonth() - quantity);
  if (period === 'year') dateFormatted.setFullYear(dateFormatted.getFullYear() - quantity);
  return dateFormatted;
};

export const nextPeriodDate = (newDate, period = 'day', quantity = 1, hourPreset = null) => {
  const dateFormatted = new Date(newDate);
  if (hourPreset === 'start') defaultParseDate(dateFormatted, 'start');
  if (hourPreset === 'end') defaultParseDate(dateFormatted, 'end');
  if (period === 'day') dateFormatted.setDate(dateFormatted.getDate() + quantity);
  if (period === 'week') dateFormatted.setDate(dateFormatted.getDate() + quantity * 7);
  if (period === 'month') dateFormatted.setMonth(dateFormatted.getMonth() + quantity);
  if (period === 'year') dateFormatted.setFullYear(dateFormatted.getFullYear() + quantity);
  return dateFormatted;
};

export const phoneFormatter = (value, hideCountryCode = false) => {
  const phone = value.replace(/\D/g, '');
  if (phone.length >= 12 && hideCountryCode) return phone.substring(2);
  return phone;
};
