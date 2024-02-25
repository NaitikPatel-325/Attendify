import React from "react";
import UserContext from "./create";

export const UserContextProvider = ({ children }) => {
  const [username, setUser] = React.useState("u1");  // Replace "abc" with an appropriate initial value
  const [password, setPassword] = React.useState("pqe");  // Replace "pqe" with an appropriate initial value
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isStudent, setIsStudent] = React.useState(true);
  const [isClub, setIsClub] = React.useState(false);

  const userContextValue = {
    username,
    isLoggedIn,
    isStudent,
    isClub,
    setUser,
    setIsLoggedIn,
    setIsStudent,
    setIsClub,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
};
