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
for (let i = 0; i < data.length; i++) {
  output += `<li>
               <span class="day"> ${data[i].day}: </span>
               <span class="hours"> ${data[i].from} - ${data[i].to} </span>
            </li>`;
}
document.getElementById('data').innerHTML = output;
