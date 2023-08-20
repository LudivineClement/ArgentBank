import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HeaderAccount from '../components/HeaderAccount/HeaderAccount';
import Account from '../components/Account/Account';

const User = () => {
  return (
    <div className='page_account'>
      <Navbar />
      <main className="main bg-dark">
        <HeaderAccount />
        <Account />
      </main>

      <Footer />
    </div>
  );
};

export default User;