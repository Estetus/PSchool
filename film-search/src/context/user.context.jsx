import { createContext, useState } from "react";

export const UserContext = createContext({
  loggedUser: null,
});

export const UserContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState("");

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </UserContext.Provider>
  );
};
