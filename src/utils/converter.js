export const currencyValue = value =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export const numberToCurrencyString = (number, options) =>
  new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'BRL',
    ...options,
  }).format(!Number(number) ? 0 : number);

export const currencyStringToNumber = string =>
  typeof string === 'string' ? Number(string.replace(/[^\d]/g, '')) / 100 : 0;

export const percentValue = value =>
  new Intl.NumberFormat('pt-BR', {
    style: 'percent',
    maximumFractionDigits: 2,
  }).format(Number(value || 0) / 100);

export const decimalToPercent = value => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'percent',
    roundMode: 'trunc',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
    .format(Number(value))
    .replace('%', '');
  return Number(formatted);
};

export const percentToDecimal = value => {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    roundMode: 'trunc',
    minimumFractionDigits: 4,
    maximumFractionDigits: 4,
  }).format(Number(value || 0) / 100);
  return Number(formatted);
};

export const percentVariation = (value, prevValue) => {
  if (Number(value) && Number(prevValue)) {
    return (Number(value) - Number(prevValue)) / Number(prevValue);
  }
  if (Number(value) && Number(prevValue) === 0) {
    return Number(value);
  }
  return 0;
};

const fillZeroes = time => (time.toString().length === 1 ? `0${time}` : time);

export const toHoursMinutes = totalSeconds => {
  const totalMinutes = Math.floor(totalSeconds / 60);

  const seconds = totalSeconds % 60;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  return { h: fillZeroes(hours), m: fillZeroes(minutes), s: fillZeroes(seconds) };
};

export const secondsToDaysHoursMinutes = totalSeconds => {
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const totalDays = Math.floor(totalHours / 24);

  const seconds = totalSeconds % 60;
  const minutes = totalMinutes % 60;
  const hours = totalHours % 24;

  return {
    d: totalDays,
    h: fillZeroes(hours),
    H: totalHours,
    m: fillZeroes(minutes),
    M: totalMinutes,
    s: fillZeroes(seconds),
  };
};

export const timeToSeconds = value => {
  const time = value.split(':');
  return Number(time[0]) * 3600 + Number(time[1]) * 60;
};

export const limitPercentageValue = (value, max = 100) => {
  if (!value || value < 0) return '0';

  let normalizedValue = String(value)
    .replace(',', '.')
    .replace(/[^\d.]/g, '');

  const firstDecimalIndex = normalizedValue.indexOf('.');
  const beforeDecimal = normalizedValue.substring(0, firstDecimalIndex + 1);
  const afterDecimal = normalizedValue.substring(firstDecimalIndex + 1).replace(/\./g, '');
  normalizedValue = beforeDecimal + afterDecimal;

  const numValue = Number(normalizedValue);

  if (numValue > max) {
    return normalizedValue.length <= 1 ? max.toString() : normalizedValue.slice(0, -1);
  }

  return (Math.round(numValue * 100) / 100).toString();
};
