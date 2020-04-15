import React from 'react';
import './App.css';
import { GlobalProvider } from './component/GlobalState';
import Header from './component/Header';
import Balance from './component/Balance';
import IncExp from './component/IncExp';
import TxnList from './component/TxnList';
import AddTxn from './component/AddTxn';
import History from './component/History';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Route
          exact
          path='/'
          render={() => (
            <React.Fragment>
              <div className='container'>
                <Header />
                <Balance />
                <IncExp />
                <TxnList />
                <AddTxn />
              </div>
            </React.Fragment>
          )}
        />
        <Route path='/history' component={History} />
      </GlobalProvider>
    </Router>
  );
}

export default App;
