// UserProfile.js
import React, { useContext } from 'react';
import UserContext from '../../../context/create';  // without curly braces

export const P2 = () => {
  const { username, isLoggedIn, isStudent, isClub } = useContext(UserContext);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {username}</p>
      <p>Is Logged In: {isLoggedIn ? 'Yes' : 'No'}</p>
      <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>
      <p>Is Club: {isClub ? 'Yes' : 'No'}</p>
    </div>
  );
};
