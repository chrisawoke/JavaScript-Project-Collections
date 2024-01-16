// Breakdown of how the game project is:

// 1. Deposit some money
// 2. Determine the number of lines to bet on
// 3. Collect a bet amount
// 4. Spin the slot machine
// 5. Check if the user won
// 6. Give the user their winnings or take their bet
// 7. Play the game again

const prompt = require("prompt-sync")();

const depositMoney = () => {
  const depositAmount = prompt("Enter your deposit amount: ");
  const numberDepositAmount = parseFloat(depositAmount);

  if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
    console.log("Invalid deposit amount. Please try again.");
  }
};

depositMoney();
