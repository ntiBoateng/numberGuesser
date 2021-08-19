let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:
const generateTarget = ()=>{
  return Math.floor(Math.random()*10);
}
const compareGuesses=(userGuess,computerGuess,target)=>{
  let userT = Math.abs(target-userGuess);
  let compT = Math.abs(target-computerGuess);
  return userT <= compT;
  if(userT===compT){
    return true;
  }
  if(userT<compT){
      return true;
  }
  if(compT<userT){
      return false;
  }
}
const updateScore = winner =>{
    if(winner ==='human'){
        humanScore++;  
    }
    else if(winner==='computer'){
        computerScore++;
    }
}
const advanceRound =()=>{
    currentRoundNumber++;
}