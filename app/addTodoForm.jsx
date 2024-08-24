"use client";

import React from "react";

const addTodoForm = () => {
  return (
    <div className="login">
      <section>
        <form>
          <input type="text" placeholder="Enter you Task Title" />
          <input type="text" placeholder="Enter you Task Description" />
          <button type="submit">Create Task</button>
        </form>
      </section>
    </div>
  );
};

export default addTodoForm;
