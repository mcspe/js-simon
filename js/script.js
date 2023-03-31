const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const hideSeq = () => outputBox.hidden = true;
const getUserSeq = () => {
  for (let i = 0; i < 5; i++) {
    const userInput = 0;//parseInt(prompt(`Inserisci il valore mostrato numero ${i+1}`));
    userSeq.push(userInput);
  }
  checkUserSeq();
}

const outputBox = document.querySelector('h1');
let outputMsg;
const generatedSeq = [];
const userSeq = [];

for (let i = 0; i < 5; i++) {
  generatedSeq.push(generateRandomNumber(1, 100));
}
outputBox.innerHTML = generatedSeq.join(' ');

setTimeout(() => hideSeq(), 5000);
setTimeout(() => getUserSeq(), 5500);

function checkUserSeq() {
  const validArr = [];
  const validElement = [];
  for (let i = 0; i < generatedSeq.length; i++) {
    const validInput = (generatedSeq[i] === userSeq[i]) ? true : false;
    validArr.push(validInput);
    console.log('validArr', validArr);
  }
  if (validArr.includes(false)){
    //for (let j = 0; j < validArr.length; j++) {
      //let deleteIndexValue = validArr.indexOf(false, j);
      //console.log('deleteIndexValue', deleteIndexValue);
    //}
    for (let j = 0; j < generatedSeq.length; j++) {
      if (generatedSeq[j] === userSeq[j]) {
        validElement.push(userSeq[j]);
      }
    }
    outputMsg = (validElement.length != 0) ? `Ci siamo quasi, hai indovinato ${validElement.length} numeri su ${generatedSeq.length}. La sequenza era ${generatedSeq.join(' ')}. I numeri indovinati sono ${validElement.join(' ')}` : `Peccato! non hai indovinato alcun numero...`;
    console.log(validElement);
  } else {
    outputMsg = `Complimenti! hai indovinato tutti i numeri! ${generatedSeq.join(' ')}`;
  }
  outputBox.innerHTML = outputMsg;
  outputBox.hidden = false;
}


console.log('generatedSeq', generatedSeq, 'userSeq', userSeq);


const timerDiv = document.querySelector('.timer');
const timerCenter = document.querySelector('.center');
let timerMovement = 2.7;
let moved = -90;

const timer = setInterval(() => {
  moved -= timerMovement;
  timerCenter.style.transform = `rotate(${moved}deg)`;
}, 50);

setTimeout(() => {
  clearInterval(timer);
}, 5000);

console.log(timerCenter);