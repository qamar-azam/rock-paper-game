import React, { useState } from 'react';
import { Bet, Choice } from '../../types/game';

interface BetOptionProps {
  choice: Choice;
  placeBet: (bet: Bet) => void;
}

const BetOption: React.FC<BetOptionProps> = ({ choice, placeBet }) => {
  const [betAmount, setBetAmount] = useState(500);

  const handlePlaceBet = () => {
    placeBet({ choice, amount: betAmount });
  };

  const bgColor =
    choice === 'paper'
      ? 'bg-red-500'
      : choice === 'scissors'
      ? 'bg-green-500'
      : 'bg-blue-500';

  return (
    <div className={`border p-8 rounded-md ${bgColor}`}>
      <h3 className='capitalize text-xl mb-2'>{choice}</h3>
      <input
        type='number'
        value={betAmount}
        onChange={(e) => setBetAmount(parseInt(e.target.value, 10))}
        min={500}
        step={500}
        className='border border-black rounded p-2 mr-2'
      />
      <button
        onClick={handlePlaceBet}
        className='bg-black text-white rounded px-2 py-2'
      >
        Place Bet
      </button>
    </div>
  );
};

export default BetOption;
