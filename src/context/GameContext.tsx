import React, { createContext, useState, useContext } from 'react';
import { GameState, Bet } from '../types/game';
import { randomChoice } from '../utils/randomChoice';
import { calculateResult } from '../utils/calculateResult';

const initialState: GameState = {
  balance: 5000,
  bets: [],
  computerChoice: null,
  result: null,
  errorMsg: ''
};

interface GameContextProps {
  state: GameState;
  placeBet: (bet: Bet) => void;
  resolveGame: () => void;
  resetGame: () => void;
}

const GameContext = createContext<GameContextProps | undefined>(undefined);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [state, setState] = useState<GameState>(initialState);

  const placeBet = (bet: Bet) => {
    if (state.balance >= bet.amount && state.bets.length < 2) {
      setState((prevState) => ({
        ...prevState,
        bets: [...prevState.bets, bet],
        balance: prevState.balance - bet.amount
      }));
    } else if (state.balance < bet.amount) {
      setState((prevState) => ({
        ...prevState,
        errorMsg: 'Not enough balance'
      }));
    } else if (state.bets.length > 2) {
      setState((prevState) => ({
        ...prevState,
        errorMsg: 'No more then 2 bets'
      }));
    }
  };

  const resolveGame = () => {
    const computerChoice = randomChoice();
    const { result, winnings } = calculateResult(state.bets, computerChoice);

    setState((prevState) => ({
      ...prevState,
      computerChoice,
      result,
      balance: prevState.balance + winnings
    }));
  };

  const resetGame = () => {
    setState(initialState);
  };

  return (
    <GameContext.Provider value={{ state, placeBet, resolveGame, resetGame }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
