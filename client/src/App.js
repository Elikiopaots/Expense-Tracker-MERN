import React from 'react';
import './App.css';
import {GlobalProvider} from './component/GlobalState'
import Header from './component/Header';
import Balance from './component/Balance';
import IncExp from './component/IncExp';
import TxnList from './component/TxnList';
import AddTxn from './component/AddTxn';

function App() {
  return (
    <div className="container">
      <GlobalProvider>
      <Header />
      <Balance />
      <IncExp />
      <TxnList />
      <AddTxn />
      </GlobalProvider>
    </div>
  );
}

export default App;
