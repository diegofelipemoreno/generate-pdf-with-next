import {DateTime} from 'luxon';
import moment from 'moment';


export function labels(config) {
  var cfg = config || {};
  var min = cfg.min || 0;
  var max = cfg.max || 100;
  var count = cfg.count || 8;
  var step = (max - min) / count;
  var decimals = cfg.decimals || 8;
  var dfactor = Math.pow(10, decimals) || 0;
  var prefix = cfg.prefix || '';
  var values = [];
  var i;

  for (i = min; i < max; i += step) {
    values.push(prefix + Math.round(dfactor * i) / dfactor);
  }

  return values;
}

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function months(config) {
  var cfg = config || {};
  var count = cfg.count || 12;
  var section = cfg.section;
  var values = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }

  return values;
}

const COLORS = [
  '#4dc9f6',
  '#f67019',
  '#f53794',
  '#537bc4',
  '#acc236',
  '#166a8f',
  '#00a950',
  '#58595b',
  '#8549ba'
];

export function color(index) {
  return COLORS[index % COLORS.length];
}

export const CHART_COLORS = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)'
};

const NAMED_COLORS = [
  CHART_COLORS.red,
  CHART_COLORS.orange,
  CHART_COLORS.yellow,
  CHART_COLORS.green,
  CHART_COLORS.blue,
  CHART_COLORS.purple,
  CHART_COLORS.grey,
];

export function namedColor(index) {
  return NAMED_COLORS[index % NAMED_COLORS.length];
}

export function newDateRange(start, end) {
  const dateRange = []
  let startDate = new Date([start, '12:00']);
  const endDate = new Date([end, '12:00']);

  while(startDate < endDate){
      dateRange.push(moment(startDate).format('MMM DD'));

      const newDate = startDate.setDate(startDate.getDate() + 1);

      startDate = new Date(newDate);
   }

   return dateRange;
}

export function newTimeRange(start, end, time) {
  const dateRange = [];

  if (time === 'months') {
      const startDate = moment(start);
      const endDate = moment(end);

      if (startDate < endDate) {
          const date = startDate.startOf('month');

          while (date < endDate.endOf('month')) {
              dateRange.push(moment(date).format('MMM YY'));
              date.add(1, 'month');
          }
      }
  }

  if (time === 'days') {
    const startDate = moment(start);
    const endDate = moment(end);

    if (startDate < endDate) {
        const date = startDate.startOf('day');

        while (date < endDate.endOf('day')) {
            dateRange.push(moment(startDate).format('MMM DD'));
            date.add(1, 'day');
        }
    }
  }

  return dateRange;
}

export function newDateRangeTwo(start, end) {
  const dateRange = []
  let startDate = new Date([start, '12:00']);
  const endDate = new Date([end, '12:00']);

  while(startDate < endDate){
      const startOfMonthFormatted = moment(startDate).startOf('month').format('MMM DD');
      const startDateFormatted = moment(startDate).format('MMM DD');
      const isStartOfMonth = startOfMonthFormatted === startDateFormatted;
      const isFirstDate = !dateRange.length;



    if (isStartOfMonth || isFirstDate) {
      dateRange.push(moment(startDate).format('MMM DD'));
    } else {
      dateRange.push(moment(startDate).format('DD'));
    }

    const newDate = startDate.setDate(startDate.getDate() + 1);

    startDate = new Date(newDate);
   }

   return dateRange;
}

export function newDate(days) {
  return DateTime.now().plus({days}).toLocaleString({ month: 'long', day: 'numeric' });
}

export function newDateString(days) {
  return DateTime.now().plus({days}).toISO();
}

export function parseISODate(str) {
  return DateTime.fromISO(str);
}
