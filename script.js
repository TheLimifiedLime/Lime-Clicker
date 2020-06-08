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
//Declaring Arrays
const upgrade1price = [20, 40, 60, 80, 100]
const upgrade2price = [60, 100, 140, 180, 220]

const clicker = () => {
  limes = limes + lpc;
  counter.innerText = limes;
  console.log(limes)
}

//Workers update text of buttons

const upgrade1Worker = () => {
  let price1 = upgrade1price[upgrade1Tracker];
  upgrade1Tracker = upgrade1Tracker + 1;
  lpc = lpc + 1
  let upgradeText1 = `Upgrade Limes Per Click:\nCost:   ${price1} Limes\n+1 Limes Per Click`;
  upgrade1button.innerText = upgradeText1;
}
const upgrade2Worker = () => {
  let price2 = upgrade2price[upgrade2Tracker];
  upgrade2Tracker = upgrade2Tracker + 1;
  let upgradeText2 = `Upgrade Limes Per Second:\nCost: ${price2} Limes\n+1 Limes Per Second`
  upgrade2button.innerText = upgradeText2;
}

//Worker verifications prevent the updating from continuing
//if the max level is reached

const worker1Verification = () => {
  if (upgrade1Tracker >= 4) {
    let upgradeText1 = `Upgrade Limes Per Click:\nCost: Maxed Out\n+1 Limes Per Click`
    upgrade1button.innerText = upgradeText1
  } else {
    upgrade1Worker()
  }
}

const worker2Verification = () => {
  if (upgrade2Tracker >= 4) {
    let upgradeText2 = `Upgrade Limes Per Second:\nCost: Maxed Out\n+1 Limes Per Click`
    upgrade2button.innerText = upgradeText2
  } else {
    upgrade2Worker()
  }
}

//Reset should be fairly obvious

const reset = () => {
  limes = 0;
  lpc = 1;
  lps = 0;
  upgrade1Tracker = 0;
  upgrade2Tracker = 0;
  counter.innerHTML = limes;
}

console.log('You really gotta cheat? Sad.')