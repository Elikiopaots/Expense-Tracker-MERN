import React, { useContext } from 'react';
import { GlobalContext } from './GlobalState';

function IncExp() {
  const { txn } = useContext(GlobalContext);

  const amounts = txn.map((txn) => txn.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  const format = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  return (
    <div className="inc-exp-container">
      <div>
          <h4>Income</h4>
          <p className="money plus">${format(income)}</p>
      </div>
      <div>
          <h4>Expense</h4>
          <p className="money minus">${format(expense)}</p>
      </div>
    </div>
  );
}

export default IncExp;
