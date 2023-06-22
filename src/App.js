import React from 'react';
import { Header } from '../src/components/Header';
import { Balance } from '../src/components/Balance';
import { IncomeExpense } from '../src/components/IncomeExpense';
import { TransactionList } from '../src/components/TransactionList';
import { AddTransaction } from '../src/components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
     <Header />
     <div className="conatiner">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        < AddTransaction />
     </div>
    </GlobalProvider>
  );
}

export default App;
