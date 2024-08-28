
// Recupera il valore della chiave 'score' dal localStorage e lo converte da stringa JSON a oggetto JavaScript
let score = JSON.parse(localStorage.getItem('score'))
  // Se il valore recuperato è null o undefined (ossia, non esiste ancora nel localStorage)
  || { wins: 0, losses: 0, ties: 0 }; // Assegna un oggetto predefinito con contatori iniziali a zero

//L'operatore logico || ritorna il primo operando che è vero (truthy). Se il primo operando è falso (falsy), ritorna il secondo operando.

updateScoreElemnent('', 'interrogativo', 'interrogativo');

// FUNC update score html
function updateScoreElemnent(result, computerMove, userChoice) {

  document.querySelector('.js-result').innerHTML = result
  document.querySelector('.js-move').innerHTML = `You <img src="img/${userChoice}-emoji.png" class="move-icon">
      Computer <img src="img/${computerMove}-emoji.png" class="move-icon">`
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

// FUNC Scleta PC
function pickComputerMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissor';
  }
  return computerMove;
}

// FUNC controllo e risultato
function controlResult(userChoice, computerMove) {
  let result = '';
  if (computerMove === userChoice) {
    result = 'tie.';
    score.ties++;
  } else if (computerMove === 'rock' && userChoice === 'scissor' ||
    computerMove === 'paper' && userChoice === 'rock' ||
    computerMove === 'scissor' && userChoice === 'paper') {
    result = 'you lose.';
    score.losses++;
  } else if (userChoice === 'rock' && computerMove === 'scissor' ||
    userChoice === 'paper' && computerMove === 'rock' ||
    userChoice === 'scissor' && computerMove === 'paper') {
    result = 'you win.';
    score.wins++;
    console.log(score);
  }
  updateScoreElemnent(result, computerMove, userChoice);

  localStorage.setItem('score', JSON.stringify(score)) // il localstore accetta solo string
}