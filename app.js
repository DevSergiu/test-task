let data = [
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




/////////////////////////v1

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

const output = newData.map(s => {
  const start = s[0];
  let day = start.day;
  let hours = `${start.from} - ${start.to}`;

  if (s.length > 1) {
    const end = s[s.length - 1];
    day = `${start.day} - ${end.day}`
  }

  return `<li><span class="day">${day}</span>: <span class="hours">${hours}</span></li>`
}).join('')

document.getElementById('data').innerHTML = output;
















///////////////// v2

// const [days, times] = data.reduce(
//   (acc, { day, from, to }) => {

//     acc[0].push(`<span class="day">${day} </span>`)
//     acc[1].push(`: <span class="hours">${from} - ${to}</span><li>`)
//     return acc
//   },
//   [[], []]
// )

// const output = [
//   ...new Set(
//     times.reduce((acc, time) => {
//       const arr = days.filter((day, i) => times[i] === time)

//       acc.push(arr.join('- ') + time)
//       return acc

//     }, [])
//   ),
// ]

// document.getElementById('data').innerHTML = output;








































