function showTab(tabName) {
  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.remove("active");
  });

  document.getElementById(tabName).classList.add("active");
}


const fullSchedule = [
  {
    day: "Sunday",
    events: [
      ["2:30 PM", "Staff arrive & set up personal space"],
      ["3:15 PM", "Staff Meeting"],
      ["4:00 PM", "Registration"],
      ["6:00 PM", "Dinner"],
      ["7:00 PM", "Service"],
      ["9:00 PM", "After-service activities: Glow Party + Dirty Soda Bar, Rules Review, Tribe War Kick-off, One Word Singing Challenge, Blind Beach Ball Grab"]
    ]
  },

  {
    day: "Monday",
    events: [
      ["8:30 AM", "Breakfast / Staff Meeting"],
      ["9:15 AM", "Tribal Wars Minute to Win It - Egg Ball Game"],
      ["9:30 AM", "Prayer - Alyssa"],
      ["9:40 AM", "Morning Session"],
      ["10:30 AM", "Break"],
      ["10:45 AM", "Variety Games - Make the Shot Challenge"],
      ["11:05 AM", "General Session - Speaker: Zach Dibble"],
      ["12:30 PM", "Lunch"],
      ["1:30 PM", "Organized Afternoon Activities - Skit & Flag Contest"],
      ["3:00 PM", "Free Time"],
      ["5:00 PM", "Dinner"],
      ["7:00 PM", "Night Service - Speaker: Bro Pedigo"],
      ["10:15 PM", "Volleyball and Ping Pong Tournament"]
    ]
  },

  {
    day: "Tuesday",
    events: [
      ["8:30 AM", "Breakfast / Staff Meeting"],
      ["9:15 AM", "Tribal Wars - Paper Ping Pong"],
      ["9:30 AM", "Prayer - Fred"],
      ["9:40 AM", "Morning Session"],
      ["10:45 AM", "Variety Games - Whacky Grab"],
      ["11:05 AM", "General Session - Speaker: Regan Pulaski"],
      ["12:30 PM", "Lunch"],
      ["1:30 PM", "Kickball & Volleyball"],
      ["5:00 PM", "Dinner"],
      ["7:00 PM", "Night Service - Speaker: Bro Pedigo"],
      ["10:15 PM", "Table Surfing & Dodgeball"]
    ]
  },

  {
    day: "Wednesday",
    events: [
      ["8:30 AM", "Breakfast / Staff Meeting"],
      ["9:15 AM", "Tribal Wars - Fruit by the Foot Challenge"],
      ["9:30 AM", "Prayer - Amanda"],
      ["11:05 AM", "General Session - Speaker: Derek Williams"],
      ["1:30 PM", "Flag Football & Wiffleball"],
      ["5:00 PM", "Dinner"],
      ["7:00 PM", "Night Service - Speaker: Bro Pedigo"],
      ["10:15 PM", "Bonfire"]
    ]
  },

  {
    day: "Thursday",
    events: [
      ["8:30 AM", "Breakfast / Staff Meeting"],
      ["9:15 AM", "Tribal Wars - Keep Reaching"],
      ["9:30 AM", "Prayer - Marcus"],
      ["11:05 AM", "General Session - Speaker: Noel Hill"],
      ["1:30 PM", "Tribe Wars Finale"],
      ["5:00 PM", "Dinner"],
      ["7:00 PM", "Night Service - Speaker: Bro Pedigo"],
      ["10:15 PM", "Open Gym"]
    ]
  },

  {
    day: "Friday",
    events: [
      ["9:00 AM", "Breakfast"],
      ["9:45 AM", "Minute to Win It - Flip the Sheet"],
      ["10:15 AM", "Prayer"],
      ["10:30 AM", "MTM General Session"],
      ["12:00 PM", "Dorm Clean Up"],
      ["12:30 PM", "Lunch"],
      ["1:30 PM", "Free Time"],
      ["5:00 PM", "Dinner"],
      ["6:00 PM", "Prayer & Service"],
      ["8:00 PM", "Dismiss / Check Out"]
    ]
  }
];


function createCards(items, type="") {

  return items.map(event => `
    <div class="card ${type}">
      <div class="time">${event[0]}</div>
      <h3>${event[1]}</h3>
    </div>
  `).join("");

}


function loadFullSchedule(){

  document.getElementById("fullSchedule").innerHTML =
  fullSchedule.map(day => `
    <h2>${day.day}</h2>
    ${createCards(day.events)}
  `).join("");

}


function loadDay(dayName){

  let day = fullSchedule.find(d => d.day === dayName);

  document.getElementById("dailySchedule").innerHTML =
  `<h2>${day.day}</h2>` +
  createCards(day.events);

}


document.getElementById("serviceSchedule").innerHTML =
`
<div class="card service">
<h3>Night Services</h3>
<p>Sunday - Friday evening services</p>
<p>Prayer, Worship, Offering, Speakers, Closing</p>
</div>
`;


document.getElementById("activitySchedule").innerHTML =
`
<div class="card activity">
<h3>Camp Activities</h3>
<p>Glow Party</p>
<p>Tribe Wars</p>
<p>Minute to Win It Games</p>
<p>Variety Games</p>
<p>Kickball, Volleyball, Flag Football</p>
<p>Bonfire & Open Gym</p>
</div>
`;


loadFullSchedule();
loadDay("Sunday");
