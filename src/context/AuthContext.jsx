import { createContext, useState } from "react";

export const MyStore = createContext();
export const AuthContext = ({ children }) => {
  const [loginUser, setLoginUser] = useState(JSON.parse(localStorage.getItem("loginUser")));
  const [registeredUsers, setRegisteredUsers] = useState(JSON.parse(localStorage.getItem("registeredUsers"))|| []);

  return (
    <MyStore.Provider
      value={{ loginUser, setLoginUser, registeredUsers, setRegisteredUsers }}
    >
        {children}
    </MyStore.Provider>
  );
};
