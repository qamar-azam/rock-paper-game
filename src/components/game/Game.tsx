import React from 'react';
import { useGameContext } from '../../context/GameContext';
import BetOption from './BetOption';
import Balance from '../balance/Balance';
import BetResult from './BetResult';

const Game: React.FC = () => {
  const { state, placeBet, resolveGame, resetGame } = useGameContext();

  return (
    <div className='text-center mt-16'>
      <h1 className='text-3xl'>Rock Paper Scissors Game</h1>
      <Balance balance={state.balance} />
      <div className='flex justify-around mb-16'>
        {['rock', 'paper', 'scissors'].map((choice) => (
          <BetOption key={choice} choice={choice as any} placeBet={placeBet} />
        ))}
      </div>

      <BetResult />

      {state.computerChoice === null ? (
        <button
          onClick={resolveGame}
          disabled={!state.bets.length}
          className='bg-black text-white rounded-full px-6 py-2 mx-4 pointer disabled:opacity-50'
        >
          Play
        </button>
      ) : (
        <button
          onClick={resetGame}
          className='bg-black text-white rounded-full px-6 py-2 mx-4 pointer'
        >
          Reset
        </button>
      )}

      {state.errorMsg && (
        <div className='border border-red-500 text-red-500 mt-8 w-1/2 m-auto rounded p-2'>
          {state.errorMsg}
        </div>
      )}
    </div>
  );
};

export default Game;
