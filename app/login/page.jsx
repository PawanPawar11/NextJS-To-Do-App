"use client";

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="email" placeholder="Enter you email" />
          <input type="password" placeholder="Enter your password" />
          <button type="submit">Login</button>
          <p>OR</p>
          <Link href={"/register"}>New User? Create an Account here</Link>
        </form>
      </section>
    </div>
  );
};

export default page;
