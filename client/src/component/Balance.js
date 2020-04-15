import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';
import { format } from './Format';

function Balance() {
  const { txn } = useContext(GlobalContext);

  const amounts = txn.map((txn) => txn.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>{format(total)}</h1>
    </>
  );
}

export default Balance;
