import dayjs from "dayjs";


// GENERATE DAY MATRIX
export function getMonth(month = (dayjs().month() + 1), year = dayjs().year()) {
  month = Math.floor(month) - 1;

  const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;

  const daysMatrix = new Array(6).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });

  return daysMatrix;
}