console.log("Hello")

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
var finalSc = document.querySelector('.resultScore');


let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole');
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add('mole');

  hitPosition = randomSquare.id;
}

const gunshotSound = document.getElementById('gunshotSound');

squares.forEach(square => {
  square.addEventListener('mousedown', () => {
    gunshotSound.currentTime = 0;
    gunshotSound.play();

    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});


let kamalJi = 500;

function moveMole() {
  timerId = setInterval(randomSquare, kamalJi);
}

moveMole();


document.getElementById('goToHome').addEventListener('click', function() {
  window.location.href = "2index.html";
});

const refreshButton = document.getElementById('refreshButton');

refreshButton.addEventListener('click', function() {
  location.reload();
});

document.getElementById('levelUp').addEventListener('click', function() {
  kamalJi -= 100;
  if (kamalJi < 100) {
    kamalJi = 100;
  }
  clearInterval(timerId);
  moveMole();
});

document.getElementById('levelDown').addEventListener('click', function() {
  kamalJi += 100;
  if (kamalJi > 700) {
    kamalJi = 700;
  }
  clearInterval(timerId);
  moveMole();
});


function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    localStorage.setItem('finalScore', result);
    window.location.href = "3gameOver.html";
  }
}

let countDownTimerId = setInterval(countDown, 1000);



