import React, { useContext, useRef } from "react";
import { UserContext } from "../context/userContext";

export default function ContextExample() {
  const user = useContext(UserContext);

  const nameRef = useRef();
  const avatarRef = useRef();

  const changeNameClickHandler = () => {
    user.changeName(nameRef.current.value);
  };

  const changeAvatarClickHandler = () => {
    user.changeAvatar(avatarRef.current.value);
  };

  return (
    <div>
      <h3>{user.name}</h3>
      <img src={user.avatar} alt={user.name} />

      <div>
        <input type="text" placeholder="name" ref={nameRef} />
        <button onClick={changeNameClickHandler}>Change name</button>
      </div>

      <div>
        <input type="text" placeholder="avatar" ref={avatarRef} />
        <button onClick={changeAvatarClickHandler}>Change avatar</button>
      </div>
    </div>
  );
}
