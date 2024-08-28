
// Recupera il valore della chiave 'score' dal localStorage e lo converte da stringa JSON a oggetto JavaScript
let score = JSON.parse(localStorage.getItem('score'))
  // Se il valore recuperato è null o undefined (ossia, non esiste ancora nel localStorage)
  || { wins: 0, losses: 0, ties: 0 }; // Assegna un oggetto predefinito con contatori iniziali a zero

//L'operatore logico || ritorna il primo operando che è vero (truthy). Se il primo operando è falso (falsy), ritorna il secondo operando.

updateScoreElemnent('', 'interrogativo', 'interrogativo');

// FUNC update score html
function updateScoreElemnent(result, randomMove, userChoice) {

  document.querySelector('.js-result').innerHTML = result
  document.querySelector('.js-move').innerHTML = `You <img src="img/${userChoice}-emoji.png" class="move-icon">
      Computer <img src="img/${randomMove}-emoji.png" class="move-icon">`
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

// FUNC Scleta PC
function pickRandomMove() {
  const randomNumber = Math.random();
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    randomMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    randomMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    randomMove = 'scissor';
  }
  return randomMove;
}

//Uso EventListner invece di Onclick
document.querySelector('.js-rock-button')
  .addEventListener('click',
    () => { //Dobbiamo creare una funzione, altrimenti controlresult runna solamente senza param
      controlResult('rock', pickRandomMove());
    });
document.querySelector('.js-paper-button')
  .addEventListener('click',
    () => {
      controlResult('paper', pickRandomMove());
    });
document.querySelector('.js-scissor-button')
  .addEventListener('click',
    () => {
      controlResult('scissor', pickRandomMove());
    });

// Far giocare con i tasti
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') { controlResult('rock', pickRandomMove()); }
  else if (event.key === 'p') { controlResult('paper', pickRandomMove()); }
  else if (event.key === 's') { controlResult('scissor', pickRandomMove()); }
});

// FUNC controllo e risultato
function controlResult(userChoice, randomMove) {
  let result = '';
  if (randomMove === userChoice) {
    result = 'tie.';
    score.ties++;
  } else if (randomMove === 'rock' && userChoice === 'scissor' ||
    randomMove === 'paper' && userChoice === 'rock' ||
    randomMove === 'scissor' && userChoice === 'paper') {
    result = 'you lose.';
    score.losses++;
  } else if (userChoice === 'rock' && randomMove === 'scissor' ||
    userChoice === 'paper' && randomMove === 'rock' ||
    userChoice === 'scissor' && randomMove === 'paper') {
    result = 'you win.';
    score.wins++;
  }

  updateScoreElemnent(result, randomMove, userChoice);

  localStorage.setItem('score', JSON.stringify(score)) // il localstore accetta solo string
}


//-----Faccio funzionare l'autoplay
let isAutoPlay = false;
let intervalId;
// const autoPlay = ()=>{}; //Si preferisce il secondo metodo per 2 motivi: Facile da leggere e hoisting (non dobbiamo curarci dell'ordine in cui viene usata).
function autoPlay() {
  if (!isAutoPlay) {
    intervalId = setInterval(() => {
      controlResult(
        pickRandomMove(), pickRandomMove())
    }, 1000);
    //passare una funzione anonima a setInterval che esegue controlResult ogni volta che l'intervallo scade.
    isAutoPlay = true;
  } else {
    clearInterval(intervalId);
    isAutoPlay = false;
  };

}

