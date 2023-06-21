import React from 'react';
import { Header } from '../src/components/Header';
import { Balance } from '../src/components/Balance';
import { IncomeExpense } from '../src/components/IncomeExpense';
import { TransactionList } from '../src/components/TransactionList';
import { AddTransaction } from '../src/components/AddTransaction';

import './App.css';

function App() {
  return (
    <div>
     <Header />
     <div className="conatiner">
      <Balance />
      <IncomeExpense />
      <TransactionList />
      < AddTransaction />
     </div>
    </div>
  );
}

export default App;
