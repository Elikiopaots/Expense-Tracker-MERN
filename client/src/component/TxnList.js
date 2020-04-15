import React, { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalState';
import Txn from './Txn';
import {NavLink} from 'react-router-dom';

function TxnList() {
  const { txn, getTxn } = useContext(GlobalContext);

  useEffect(() => {
    getTxn();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
        <h3>History<NavLink id='history' to='/history'>(All Transactions)</NavLink></h3>
      <ul className='list'>
        {txn.map((txn) => (
          <Txn key={txn._id} txn={txn} />
        ))}
      </ul>
    </>
  );
}

export default TxnList;
