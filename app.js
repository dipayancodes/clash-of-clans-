// ======================== HARE KRISHNA ============================

const barberian = document.getElementById("barberian")
const archer = document.getElementById("archer")
const giant = document.getElementById("giant")
const wizard = document.getElementById("wizard")
const dragon = document.getElementById("dragon")
const result = document.getElementById("result")



bcount = 0
acount = 0
gcount = 0
wcount = 0
dcount = 0

barberian.onclick = () => {
  bcount += 1
  barberian.innerHTML = "barberian:" + bcount;
}

archer.onclick = () => {
  acount += 1
  archer.innerHTML = "archer:" + acount;
}

giant.onclick = () => {
  gcount += 1
  giant.innerHTML = "giant:" + gcount;
}

wizard.onclick = () => {
  wcount += 1
  wizard.innerHTML = "wizard:" + wcount;
}

dragon.onclick = () => {
  dcount += 1
  dragon.innerHTML = "dragon:" + dcount;
}


result.addEventListener("click", () => {
  troopstrained = bcount+acount+gcount+wcount+dcount
  console.log("you trained " + bcount + " ammount of barberian")
  console.log("you trained " + acount + " ammount of archer")
  console.log("you trained " + gcount + " ammount of giant")
  console.log("you trained " + wcount + " ammount of wizard")
  console.log("you trained " + dcount + " ammount of dragon")
  landedtroops = console.log("you started attacking with " + troopstrained + " ammount of troops")
  if (troopstrained === 0) {
    console.log("train some troops first")
  } else {
    setTimeout(() => {
      console.log("Finding a Battle for you.....") 
    }, 5000);
    setTimeout(() => {
      console.log("FOUND A BATTLE ⚔") 
    }, 5000);
    setTimeout(() => {
      console.log("Batteling with your oponnentx...") 
    }, 9000);


    wonlos = ["won", "lost"]
    wonlosresult = Math.floor(Math.random(wonlos))
    stars = Math.floor(Math.random() * 3)
    acc = Math.ceil(Math.random() * 100)

    if (stars === 0) {
      console.log("you LOST better luck next time :(")
    } else {
      setTimeout(() => {
        console.log("you got WON " + stars + " stars with " + acc + "% accuracy") 
      }, 10000);
    }
  } 
})

