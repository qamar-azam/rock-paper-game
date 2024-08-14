export type Choice = 'rock' | 'paper' | 'scissors';

export interface Bet {
  choice: Choice;
  amount: number;
}

export interface GameState {
  balance: number;
  bets: Bet[];
  computerChoice: Choice | null;
  result: string | null;
  errorMsg: string;
}
