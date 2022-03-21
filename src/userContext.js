import { createContext, useState } from "react";

const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(null);

  return (
    <UserContext.Provider
      value={{
        name,
        age,
        setName,
        setAge,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;
