//For Storing Score in Local Storage.
let scores = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0 };

updateScore();
  
//For Updating the Score after Pressing Reset Score & Refreshing.
function updateScore(){
  document.querySelector('.js-wins').innerHTML=`Win: ${scores.wins}`;
  document.querySelector('.js-losses').innerHTML=`Loss: ${scores.losses}`;
  document.querySelector('.js-ties').innerHTML=`Tie: ${scores.ties}`;
  document.querySelector('.you-move').innerHTML='';
  document.querySelector('.bot-move').innerHTML='';
}

//For Picking Computer's Move and returning it.
function pickcomputerMove(){
  let computerMove='';
  const moveValue=Math.random();
  if (moveValue >= 0 && moveValue < 1/3){
    computerMove = 'Rock';
  } else if (moveValue >= 1/3 && moveValue < 2/3){
    computerMove = 'Paper';
  } else if (moveValue >= 2/3 && moveValue <= 1) {
    computerMove = 'Scissors';
  }
  return computerMove;
}

//For Calculating the Result and Updating the Score.
function calculateResult(uMove){
  const botMove = pickcomputerMove();
  let results = '';
    if(uMove === 'Rock'){
      if(botMove === 'Rock'){
        results = 'Tie.';
      } else if (botMove === 'Paper'){
        results ='Computer Win.';
      } else if(botMove === 'Scissors'){
        results = 'You win.';
      }
    } else if(uMove === 'Paper'){
      if(botMove === 'Rock'){
        results = 'You win.';
      } else if (botMove === 'Paper'){
        results = 'Tie.';
      } else if(botMove === 'Scissors' ){
        results ='Computer Win.';
      }
    } else if (uMove === 'Scissors'){
      if(botMove === 'Rock'){
        results ='Computer Win.';
      } else if (botMove === 'Paper'){
        results = 'You win.';
      } else if(botMove === 'Scissors') {
        results = 'Tie.';
      }
    }
//For Updating the Score Object according to the Result.
  if (results === 'You win.'){
    scores.wins += 1;
  } else if (results === 'Computer Win.'){
    scores.losses += 1;
  } else if (results === 'Tie.'){
    scores.ties += 1;
  }
  localStorage.setItem('score',JSON.stringify(scores));
  document.querySelector('.js-wins').innerHTML = `Win: ${scores.wins}`;
  document.querySelector('.js-losses').innerHTML = `Loss: ${scores.losses}`;
  document.querySelector('.js-ties').innerHTML = `Tie: ${scores.ties}`;
//For Displaying Current Moves.
  document.querySelector('.you-move').innerHTML = `You — ${uMove}`;
  document.querySelector('.bot-move').innerHTML = `Bot — ${botMove}`;
}