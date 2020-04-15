import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';
import {format} from './Format'

function Txn({ txn }) {
  const { delTxn } = useContext(GlobalContext);

  const sign = txn.amount > 0 ? '+' : '-';

  return (
    <>
      <li className={txn.amount > 0 ? 'plus' : 'minus'} id="front">
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
