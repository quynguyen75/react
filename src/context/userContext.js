import { createContext, useState } from "react";

const UserContext = createContext({
  name: "",
  avatar: "",
  changeName: () => {},
  changeAvatar: () => {},
});

function UserContextProvider({ children }) {
  const [user, setUser] = useState({
    name: "",
    avatar: "",
  });

  const changeName = (name) =>
    setUser({
      ...user,
      name,
    });

  const changeAvatar = (avatar) =>
    setUser({
      ...user,
      avatar,
    });

  return (
    <UserContext.Provider
      value={{
        name: user.name,
        avatar: user.avatar,
        changeName,
        changeAvatar,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
