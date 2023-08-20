import React from 'react';
import './headerAccount.css';


const HeaderAccount = () => {
  return (
    <div className="header">
      <h1>Welcome back<br />Tony Jarvis!</h1>
      <button className="edit-button">Edit Name</button>
      <h2 class="sr-only">Accounts</h2>
    </div>
  );
};

export default HeaderAccount;