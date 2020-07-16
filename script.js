//Declaring the first variables
let limes = 0;
let lpc = 1;
let lps = 0;
let upgrade1Tracker = 0
let upgrade2Tracker = 0
//Declaring the HTMl elements in Javascript
const counter = document.getElementById(`limes`);
const upgrade1button = document.getElementById(`up1`)
const upgrade2button = document.getElementById(`up2`)

const clicker = () => {
  limes += lpc
  counter.innerText = limes;
}