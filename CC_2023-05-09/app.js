//Rock Paper Scissors! 8kyu
//Let's play! You have to return which player won! In case of a draw return Draw!.
//P: Will have two plays per turn
//R: Return who won based on rock, paper, or scissor being thrown
//E: Examples(Input1, Input2 --> Output): "scissors", "paper" --> "Player 1 won!" "scissors", "rock" --> "Player 2 won!" "paper", "paper" --> "Draw!"
//P:
const rps = (p1, p2) => {
    if( p1 === 'scissors' && p2 === 'paper' || p1 === 'rock' && p2 === 'scissors' || p1 === 'paper' && p2 === 'rock'){
        return 'Player 1 won!';
    } else if ( p1 === 'paper' && p2 === 'scissors' || p1 === 'scissors' && p2 === 'rock' || p1 === 'rock' && p2 === 'paper'){
        return 'Player 2 won!'
    } else if (p1 === 'scissors' && p2 === 'scissors' || p1 === 'rock' && p2 === 'rock' || p1 === 'paper' && p2 === 'paper'){
        return 'Draw!';
    }
}

//Other Codewars solutions
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = {rock: "scissors", paper: "rock", scissors: "paper"};
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  }
  else {
    return "Player 2 won!";
  }
};

const rps = (p1, p2) => {
  if (p1 == p2)
    return 'Draw!';
    
   if (p1 == 'rock' && p2 == 'scissors') 
     return 'Player 1 won!'
   else if (p1 == 'scissors' && p2 == 'paper') 
     return 'Player 1 won!'
   else if (p1 == 'paper' && p2 == 'rock') 
     return 'Player 1 won!'
   else
     return 'Player 2 won!';
};

const rps = (p1, p2) => {
  const rules = {
    'scissors': 'paper',
    'rock': 'scissors',
    'paper': 'rock'
  };
  return rules[p1] === p2 ? 'Player 1 won!' : p1 === p2 ? 'Draw!' : 'Player 2 won!';
};