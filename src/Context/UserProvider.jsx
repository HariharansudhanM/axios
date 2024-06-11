import React, { createContext, useState } from "react";
export const userContext = createContext();
function UserProvider({ children }) {
  let [userData, setUserData] = useState([]);

  let [edit, setEdit] = useState(false);
  return (
    <userContext.Provider value={{ userData, setUserData, edit, setEdit }}>
      {children}
    </userContext.Provider>
  );
}

export default UserProvider;
