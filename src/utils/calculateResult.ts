import { Bet, Choice } from '../types/game';

export const calculateResult = (
  bets: Bet[],
  computerChoice: Choice
): { result: string; winnings: number } => {
  let winnings = 0;
  let result = 'lose'; // Default result

  if (bets.length === 1) {
    const playerBet = bets[0];
    if (playerBet.choice === computerChoice) {
      result = 'tie';
      winnings = playerBet.amount; // Bet is returned
    } else if (
      (playerBet.choice === 'rock' && computerChoice === 'scissors') ||
      (playerBet.choice === 'scissors' && computerChoice === 'paper') ||
      (playerBet.choice === 'paper' && computerChoice === 'rock')
    ) {
      result = 'win';
      winnings = playerBet.amount * 14; // Single bet win multiplier
    }
  } else if (bets.length === 2) {
    const betWon = bets.find((bet) => bet.choice === computerChoice);

    if (betWon) {
      result = 'win';
      winnings = betWon.amount * 3; // Double bet win multiplier
    } else if (
      (bets[0].choice === computerChoice &&
        bets[1].choice !== computerChoice) ||
      (bets[1].choice === computerChoice && bets[0].choice !== computerChoice)
    ) {
      result = 'tie';
      winnings = bets[0].amount + bets[1].amount; // Bets are returned
    }
  }

  return { result, winnings };
};
