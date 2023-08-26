import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile } from '../../actions/user.action';
import './headerAccount.css';

const HeaderAccount = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  return (
    <div className="header">
      <h1>Welcome back<br />{userProfile.userName} !</h1>
      <button className="edit-button">Edit Name</button>
      <h2 className="sr-only">Accounts</h2>
    </div>
  );
};

export default HeaderAccount;
