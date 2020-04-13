import React, { useContext, useEffect } from 'react';
import { GlobalContext } from './GlobalState';
import Txn from './Txn';

function TxnList() {
  const { txn, getTxn } = useContext(GlobalContext);

  useEffect(() => {
    getTxn();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {txn.map((txn) => (
          <Txn key={txn._id} txn={txn} />
        ))}
      </ul>
    </>
  );
}

export default TxnList;
