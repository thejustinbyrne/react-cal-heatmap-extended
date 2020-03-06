// returns a new date shifted a certain number of days (can be negative)
export function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

export function getBeginningTimeForDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

// obj can be a parseable string, a millisecond timestamp, or a Date object
export function convertToDate(obj) {
  return obj instanceof Date ? obj : new Date(obj);
}

export function dateNDaysAgo(numDaysAgo) {
  return shiftDate(new Date(), -numDaysAgo);
}

export function getRange(count) {
  const arr = [];
  for (let idx = 0; idx < count; idx += 1) {
    arr.push(idx);
  }
  return arr;
}

function renderCalMondayThroughSunday(month) {
  let year = new Date().getUTCFullYear();
  let n = new Date(`${month}/01/${year}`);
  let date = 0;
  let currentDay = n.getDay();
  let weekArr = [];
  let ld = getLastDayOf(month);
  for ( let i = 0; i < Math.ceil(ld / 7); i++ ) {
    let twa = []; day = 1;
    for ( let d = 0; d < 7; d++ ) {
      if(currentDay > day && date === 0) {
        twa.push(`X-${daysOfWeek[day]}`);
      } else {
        if(date > ld) {
          twa.push(`X-${daysOfWeek[day]}`);
        } else {
          twa.push(`${date}-${daysOfWeek[day]}`);
        }
      }
      day++;
      if(day >= currentDay || date > 0) {
        date++;
      }
      if(day === 7) {
        day = 0;
      }
    }
    weekArr.push(twa);
  }
  console.log(weekArr);
}

export const daysOfWeek = [ "Su", "M", "T", "W", "Th", "F", "Sa" ];

export function getLastDayOf(month) {
  let year = new Date().getUTCFullYear();
  let n = new Date(`${month}/01/${year}`);
  n.setMonth(n.getMonth() + 1);
  n.setDate(n.getDate() - 1);
  return n.getDate();
}