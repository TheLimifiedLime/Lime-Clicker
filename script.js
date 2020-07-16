//Declaring the first variables
var limes = 0;
var lpc = 1;
var lps = 0;
var upgrade1Tracker = 0;
var upgrade2Tracker = 0;
//Declaring the HTMl elements in Javascript
const counter = document.getElementById(`limes`);
const upgrade1button = document.getElementById(`up1`)
const upgrade2button = document.getElementById(`up2`)

const clicker = () => {
  limes += lpc
  counter.innerText = limes;
}

const upgrade1 = () => {
  if (limes >= 20) {
    lpc += 1
  } else {
    alert(`You don't have enough limes`)
  }
}