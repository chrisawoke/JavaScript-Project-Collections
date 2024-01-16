// Breakdown of how the game project is:

// 1. Deposit some money
// 2. Determine the number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings or take their bet
// 7. Play the game again

const prompt = require("prompt-sync")();

// 1. Deposit some money (Done here ✅)
const depositMoney = () => {
  while (true) {
    const depositAmount = prompt("Enter your deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount. Please try again.");
    } else {
      return numberDepositAmount;
    }
  }
};

// 2. Determine the number of lines to bet on (Done here ✅)
const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3): ");
    const numberOfLines = parseFloat(lines);

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines. Please try again.");
    } else {
      return numberOfLines;
    }
  }
};

// 3. Collect a bet amount (Done here ✅)
const getBet = (balance) => {
  while (true) {
    const bet = prompt("Enter the total bet amount: ");
    const numberBet = parseFloat(bet);

    if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance) {
      console.log("Invalid bet amount. Please try again");
    } else {
      return numberBet;
    }
  }
};

let balance = depositMoney();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance);
