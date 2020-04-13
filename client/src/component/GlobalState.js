import React, { createContext, useReducer } from 'react';
import axios from 'axios';

export const initialState = {
  txn: [],
  error: null,
  loading: true,
};

export const GlobalContext = createContext(initialState);

export const Reducer = (state, action) => {
  switch (action.type) {
    case 'get':
      return {
        loading: false,
        txn: action.p.reverse(),
      };

    case 'txnErr':
      return {
        ...state,
        error: action.p,
      };

    case 'add':
      return {
        txn: [action.p, ...state.txn],
      };

    case 'del':
      return {
        txn: [...state.txn.filter((item) => item._id !== action.p)],
      };

    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const getTxn = async () => {
    try {
      const res = await axios.get('/api/v1/transactions');

      dispatch({
        type: 'get',
        p: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'txnErr',
        p: err.response.data.error,
      });
    }
  };

  const addTxn = async (txn) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/v1/transactions', txn, config);

      dispatch({
        type: 'add',
        p: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'txnErr',
        p: err.response.data.error,
      });
    }
  };

  const delTxn = async (id) => {
    try {
      await axios.delete(`/api/v1/transactions/${id}`);

      dispatch({
        type: 'del',
        p: id,
      });
    } catch (err) {
      dispatch({
        type: 'txnErr',
        p: err.response.data.error,
      });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        txn: state.txn,
        error: state.error,
        loading: state.loading,
        getTxn,
        addTxn,
        delTxn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
