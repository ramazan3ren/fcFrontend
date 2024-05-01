import React, { createContext, useState, useContext } from "react";
import { loadAuthState, storeAuthState } from "./stroage";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(loadAuthState());

  const onLoginSuccess = (data) => {
    setAuth(data);
    storeAuthState(data);
  };

  const onLogoutSuccess = () => {
    setAuth({ id: 0 });
    storeAuthState({ id: 0 });
  };

  return (
    <AuthContext.Provider value={{ auth, onLoginSuccess, onLogoutSuccess }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
