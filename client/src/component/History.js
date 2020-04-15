import React, { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalState';
import {format} from './Format';
import {NavLink} from 'react-router-dom'

function History() {
  const { txn, getTxn } = useContext(GlobalContext);

  useEffect(() => {
    getTxn();
  }, [getTxn.reverse]);

  return (
      <div className='allTxn'>
        <h1><NavLink className="goBack" to='/'>&lt; Back</NavLink>All Transactions</h1>
        <ul className='list'>
          {txn.map((txn) => (
            <HistoryTxn key={txn._id} txn={txn} />
          ))}
        </ul>
      </div>
  );
}

function HistoryTxn({txn}) {
  const { delTxn } = useContext(GlobalContext);

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

export default History;
