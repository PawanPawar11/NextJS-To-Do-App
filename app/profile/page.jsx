"use client";

import { Context } from "@/components/Clients";
import { redirect } from "next/navigation";
import React from "react";
import { useContext } from "react";

const Page = () => {
  const { user } = useContext(Context);
  if (!user._id) return redirect("/login");
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Page;
