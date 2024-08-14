import React from 'react';

interface BalanceProps {
  balance: number;
}

const Balance: React.FC<BalanceProps> = ({ balance }) => {
  return (
    <div className='mb-8'>
      <h2 className='text-xl'>
        Balance: <strong className='font-bold'>{balance}</strong>
      </h2>
    </div>
  );
};

export default Balance;
