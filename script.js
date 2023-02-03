let body = document.getElementById('generator');
let displayCss = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let randomBttn = document.getElementById('random');


function setBackgroundGradient() {
  body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
  displayCss.textContent = body.style.background + ";";
}

function randomBackground() {
  let a = getFullColorHex();
  let b = getFullColorHex();
  body.style.background = "linear-gradient(to right, " + a + ", " + b + ")";
  displayCss.textContent = body.style.background + ";";
  color1.value = a;
  color2.value = b;
}


function getFullColorHex () {
  return "#" + getRandomTwoDigitValue() + getRandomTwoDigitValue() + getRandomTwoDigitValue();
}


function getRandomTwoDigitValue () {
  let set1 = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  let set2 = [0,1,2,3,4,5,6,7,8,9];

  let x = myRandomNum(set1)
  let y = myRandomNum(set2)

  let a = set1[x];
  let b = set2[y];

  return `${a}${b}`;
}


function myRandomNum(whichSet) {
  return Math.floor(Math.random() * whichSet.length);
}



color1.addEventListener('input', setBackgroundGradient);
color2.addEventListener('input', setBackgroundGradient);
randomBttn.addEventListener('click', randomBackground);
