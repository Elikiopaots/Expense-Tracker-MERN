import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

function Txn({ txn }) {
  const { delTxn } = useContext(GlobalContext);

  const format = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const sign = txn.amount > 0 ? '+' : '-';

  return (
    <>
      <li className={txn.amount > 0 ? 'plus' : 'minus'}>
        {txn.text}{' '}
        <span>
          {sign} ${format(Math.abs(txn.amount))}
        </span>
        <button onClick={() => delTxn(txn._id)} className='delete-btn'>
          X
        </button>
      </li>
    </>
  );
}

export default Txn;
