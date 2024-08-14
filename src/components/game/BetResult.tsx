import React from 'react';
import { useGameContext } from '../../context/GameContext';

const BetResult: React.FC = () => {
  const { state } = useGameContext();

  const betsChoice = state.bets.map((bet) => bet.choice);
  return (
    <div className='capitalize mb-8'>
      {betsChoice.length > 0 ? (
        <h2>You Selected: {betsChoice.toString()}</h2>
      ) : (
        ''
      )}

      {state.result && (
        <>
          <h2>Computer chose: {state.computerChoice}</h2>
          <h2>
            {betsChoice.toString()} vs {state.computerChoice}
          </h2>
          <h3>Result: {state.result}</h3>
        </>
      )}
    </div>
  );
};

export default BetResult;
