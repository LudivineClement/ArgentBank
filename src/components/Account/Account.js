import React from 'react';
import './account.css';
import transactionsData from '../../Data/transactionsData.json';

const Account = () => {
  return (
    <div>
      {transactionsData.map((transaction, index) => (
        <section key={index} className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">
              Argent Bank {transaction.accountType} ({transaction.accountNumber})
            </h3>
            <p className="account-amount">{transaction.amount}</p>
            <p className="account-amount-description">{transaction.description}</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Account;