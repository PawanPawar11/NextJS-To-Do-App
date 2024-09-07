"use client";

import Link from "next/link";
import { useState, createContext, useContext } from "react";

export const Context = createContext({ user: {} });

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export const LogoutBtn = () => {
  const LogoutAlert = () => {
    alert("You are logged out now");
  };

  const { user } = useContext(Context);
  return user.id ? (
    <button className="btn" onClick={LogoutAlert}>
      Logout
    </button>
  ) : (
    <Link href={"/login"}>Login</Link>
  );
};

export const TodoButton = ({ id, completed }) => {
  const deleteHandler = (id) => {
    alert(`Deleting ${id}`);
  };
  return (
    <>
      <input type="checkbox" checked={completed} />
      <button className="btn" onClick={() => deleteHandler(id)}>
        Delete
      </button>
    </>
  );
};
