// Get the user's choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error: Please enter a valid choice (rock, paper, or scissors)');
    }
  };
  
  // Get the computer's choice
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
     }
  };

// Cheat code variable
  const cheatCode = 'bomb'


  // Determine the winner between user or computer
  function determineWinner (userChoice, computerChoice){
    if ( userChoice === cheatCode){
        return 'You are Winner!'
    } else if (userChoice === computerChoice) {
        return ('The game is a tie!');
    } else if ( userChoice === 'rock' && computerChoice === 'paper'){
        return 'Computer Won!';
    } else if ( userChoice === 'paper' && computerChoice === 'scissors') {
        return 'Computer Won!';
    } else if (userChoice === 'scissors' && computerChoice === 'rock'){
        return 'Computer Won!';
    } else {return'You are the Winner!';  
    }
};
  
  // Function to play the game
  const playGame = () =>{
      let userChoice = getUserChoice('bomb');
      let computerChoice = getComputerChoice();
      console.log(userChoice);
      console.log(computerChoice);
      console.log(determineWinner(userChoice,computerChoice, cheatCode))
  }
  
  // Start the game
  playGame();
