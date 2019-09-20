data = [
  {
    "day": "sat",
    "from": "10:00",
    "to": "23:00"
  },
  {
    "day": "mon",
    "from": "11:00",
    "to": "23:00"
  },
  {
    "day": "tue",
    "from": "11:00",
    "to": "23:00"
  },
  {
    "day": "wed",
    "from": "11:00",
    "to": "23:00"
  },
  {
    "day": "thu",
    "from": "12:00",
    "to": "23:00"
  },
  {
    "day": "fri",
    "from": "12:00",
    "to": "23:00"
  },
  {
    "day": "sun",
    "from": "11:00",
    "to": "23:00"
  }
]



let output = '';
data.forEach(item => {
  output += `<li>
              <span class="day"> ${item.day}: </span>
              <span class="hours"> ${item.from} - ${item.to} </span>
             </li>`;
})
document.getElementById('data').innerHTML = output;



const groupBySchedule = scheduleArr => {
  const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  const groupedDays = []

  for (let i = 0; i < days.length; i++) {
    const currentDay = days[i];
    const previousDay = days[i - 1];

    const currentSchedule = scheduleArr.find(schedule => schedule.day === currentDay);
    const previousSchedule = scheduleArr.find(schedule => schedule.day === previousDay) || {};

    if (currentSchedule.to === previousSchedule.to && currentSchedule.from === previousSchedule.from) {
      groupedDays[groupedDays.length - 1].push(currentSchedule);
    } else {
      groupedDays.push([currentSchedule])
    }
  }

  return groupedDays;
}

let newData = groupBySchedule(data);
console.log(newData)



























// With For Loop

// for (let i = 0; i < data.length; i++) {
//   const day = data[i].day;
//   const fromHour = data[i].from;
//   const toHour = data[i].to;

//   output += `<li>
//                <span class="day"> ${day}: </span>
//                <span class="hours"> ${fromHour} - ${toHour} </span>
//             </li>`;
// }
// document.getElementById('data').innerHTML = output;



////////
// let groupBy = function (xs, key) {
//   return xs.reduce(function (rv, x) {
//     (rv[x[key]] = rv[x[key]] || []).push(x);
//     return rv;
//   }, {});
// };
// let newData = groupBy(data, 'from');
// console.log(newData)
