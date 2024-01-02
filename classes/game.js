const prompt = require('prompt-sync')();

class MyGame {
  constructor(no) {
    this.usernumber = no;
    this.ComputerNumber = Math.round(Math.random() * 5); // Generate a random number between 0 and 9
    this.result = false;
  }

  match() {
    if (parseInt(this.ComputerNumber) === parseInt(this.usernumber)) {
      this.result = true;
    }
    return this.result;
  }
}

const no = prompt('What is your Number? ');

let user = new MyGame(no);
let matchBegin = user.match();

if (matchBegin) {
  console.log('Congratulations! You won the match.');
} else {
  try {
    while (true) {
      const guess = prompt(`Guess again? Or press q to exit ? `);
      if(guess === 'q'){
        break;
      }
      else if (parseInt(guess) === parseInt(user.ComputerNumber)) {
        console.log('Congratulations! You won the match.');
        break;
      }
    }
  } catch (error) {
    console.log(`You lost the match. The computer's number was ${user.ComputerNumber}.`);
  }
}