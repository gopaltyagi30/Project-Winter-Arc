import { createContext, useState } from "react";

export const MyStore = createContext();
export const AuthContext = ({ children }) => {
  const [loginUser, setLoginUser] = useState(null);
  const [registeredUsers, setRegisteredUsers] = useState([]);

  return (
    <MyStore.Provider
      value={{ loginUser, setLoginUser, registeredUsers, setRegisteredUsers }}
    >
        {children}
    </MyStore.Provider>
  );
};
