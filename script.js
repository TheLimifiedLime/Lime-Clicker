//Declaring the first variables
let limes = 0;
let lpc = 1;
let lps = 0;
let upgrade1Tracker = 0;
let upgrade2Tracker = 0;
let upgrade1price = 20;
let upgrade2price = 20;
//Declaring the HTMl elements in Javascript
const counter = document.getElementById(`limes`);
const upgrade1button = document.getElementById(`up1`)
const upgrade2button = document.getElementById(`up2`)
//Decraring Arrays


const clicker = () => {
  limes += lpc
  counter.innerText = limes;
}

const upgrade1 = () => {
  if (limes >= upgrade1price) {
    limes -= upgrade1price;
    lpc += 1;
    upgrade1price += 20;
    upgrade1button.innerHTML = `Upgrade Limes Per Click:<br>Cost: ${upgrade1price} Limes<br>+1 Limes Per Click`;
    counter.innerText = limes;
  } else {
    alert(`You don't have enough limes`)
  }
}

const upgrade2 = () => {
  if (limes  >= upgrade2price) {
    limes -= upgrade2price;
    lps += 1;
    upgrade2price += 20;
    upgrade2button.innerHTML = `Upgrade Limes Per Second:<br>Cost: ${upgrade2price} Limes<br>+1 Limes Per Second`;
    counter.innerText = limes;
  } else {
    alert(`You don't have enough limes`)
  }
}

const limesPerSecond = () => {
  limes += lps
  counter.innerText = limes;
}

setInterval(limesPerSecond, 1000)

//Why