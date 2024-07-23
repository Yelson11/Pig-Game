'use strict';
const labelCurrent0 = document.getElementById('current--0');
const labelCurrent1 = document.getElementById('current--1');

const diceImage = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const WIN_SCORE = 20;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const generateRandomNumber = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const displayDice = function (number) {
  diceImage.src = `dice-${number}.png`;
};

const refreshLabelScore = function (id, score) {
  document.getElementById(`score--${id}`).textContent = score;
};

const refreshLabelCurrent = function (id, score) {
  document.getElementById(`current--${id}`).textContent = score;
};

const setWinner = function (id) {
  document.querySelector(`.player--${id}`).classList.add('player--winner');
  document.querySelector(`.player--${id}`).classList.add('player--active');
  document.getElementById(`name--${id}`).textContent = 'WINNER';
};

const changePlayerTurn = function () {
  currentScore = 0;
  refreshLabelCurrent(activePlayer, currentScore);
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active'); //Set status to active if is inactive or to inactive if is active
  player1.classList.toggle('player--active'); //Set status to active if is inactive or to inactive if is active
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    let number = generateRandomNumber();
    displayDice(number);
    if (number !== 1) {
      currentScore += number;
      refreshLabelCurrent(activePlayer, currentScore);
    } else {
      changePlayerTurn();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    refreshLabelScore(activePlayer, scores[activePlayer]);
    if (scores[activePlayer] >= WIN_SCORE) {
      setWinner(activePlayer);
      diceImage.classList.add('hidden');
      playing = false;
    } else {
      changePlayerTurn();
    }
  }
});

btnNew.addEventListener('click', function () {
  playing = true;
  activePlayer = 0;
  currentScore = 0;

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  diceImage.classList.remove('hidden');
  displayDice(0);

  for (let i = 0; i < 2; i++) {
    scores[i] = 0;
    refreshLabelCurrent(i, 0);
    refreshLabelScore(i, 0);
  }
  scores[0] = 0;
  scores[1] = 0;
});
