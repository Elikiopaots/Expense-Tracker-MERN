import React, { useState, useContext } from 'react';
import { GlobalContext } from './GlobalState';

function AddTxn() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const {addTxn} = useContext(GlobalContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !amount) return;
    const nTxn = {
      text,
      amount: +amount,
    };
    addTxn(nTxn)
    setText('')
    setAmount('')
    document.querySelector('.textbox').focus()
  };

  return (
    <>
      <h3>Add Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Text</label>
          <input
            type='text'
            value={text}
            placeholder='Add Text...'
            className='textbox'
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <label>
            Amount
            <br />
            (positive - income, negative - expense)
          </label>
          <input
            type='number'
            step='0.01'
            value={amount}
            placeholder='Add Amount...'
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  );
}

export default AddTxn;
