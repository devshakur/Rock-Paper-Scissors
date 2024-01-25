let scores = JSON.parse(localStorage.getItem('scores')) ||   {
    wins: 0,
    losses: 0,
    Ties:0
 };
   

 
function playGame(playerMove) {

 const techMove = calculation();

 let result = '';

 if(playerMove=== 'rock') {
  if (techMove=== 'rock') {
    result='Tie';
 } else if (techMove=== 'paper') {
    result='You lose';
 } else if(techMove==='scissors') {
    result='You win';
 }
 }
 else if(playerMove==='paper') {
         if (techMove==='rock') {
          result='You win';
         } else if(techMove==='paper') {
          result='Tie';
         } else if(techMove==='scissors') {
          result='You lose';
         }
 }
 else if(playerMove==='scissors') {
    if (techMove==='rock') {
       result='You lose';
    } else if(techMove==='paper') {
       result='You win';
    } else if(techMove==='scissors') {
       result='Tie';
    }
 }
 if (result==='You win') {
    scores.wins+=1;
 } else if(result==='You lose') {
    scores.losses+=1;
 } else if(result==='Tie') {
    scores.Ties+=1;
 }
localStorage.setItem('scores', JSON.stringify(scores));

pageScore();

document.querySelector('.js-result').innerHTML = `${result}.`

document.querySelector('.js-moves').innerHTML = `You
<img src="/moves pics/${playerMove}-emoji.png" alt="rock" class= "move">
<img src="./moves pics/${techMove}-emoji.png" alt="scissors" class= "move">
Computer`;

/* alert(`You picked:${playerMove }, computer picked:${techMove}, result:${result}\n
scores updates: wins:${scores.wins}, losses:${scores.losses}, Ties:${scores.Ties}`);*/
 
}

function calculation() {
 let systemMove = '';
  const randomNumber = Math.random();
 if (randomNumber >= 0 && randomNumber < 1 / 3) {
    systemMove = 'rock';
 } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    systemMove = 'paper';
 } else if (randomNumber > 2 / 3 && randomNumber < 1) {
    systemMove = 'scissors';
 }
 return systemMove;
} 

  function pageScore() {
document.querySelector('.result-update').innerHTML = `Wins: ${scores.wins}, losses:${scores.losses}, Ties: ${scores.Ties};`
} 
pageScore();

