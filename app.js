// console.log("hare krishna" )

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
  barberian.innerHTML = "barberian:" + bcount.toString(10);
}

archer.onclick = () => {
  acount += 1
  archer.innerHTML = "archer:" + acount.toString(10);
}

giant.onclick = () => {
  gcount += 1
  giant.innerHTML = "giant:" + gcount.toString(10);
}

wizard.onclick = () => {
  wcount += 1
  wizard.innerHTML = "wizard:" + wcount.toString(10);
}

dragon.onclick = () => {
  dcount += 1
  dragon.innerHTML = "dragon:" + dcount.toString(10);
}

checkifnotzero = parseInt(bcount+acount+gcount+wcount+dcount)

result.addEventListener("click",() => {
  if (checkifnotzero === 0) {
    console.log("train some troop first")
  } else {
   landedTroops = console.log("you started attacking with "+ checkifnotzero + " troops")
   setTimeout(() => {
      console.log("started batteling ⚔....") 
   }, 3000);
  setTimeout(() => {
    stars = Math.floor(Math.random() * 3)
    acc = Math.ceil(Math.random() * 100)
    if (stars >= 1) {
      console.log("you won " + stars + " stars with " + acc + "% accuracy")
    } else {
      console.log("you lost " + stars + " stars with " + acc + "% accuracy")
    }
  }, 5000);
  } 




})



