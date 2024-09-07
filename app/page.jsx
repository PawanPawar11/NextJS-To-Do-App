import React from "react";
import Form from "@/app/addTodoForm";
import { TodoItem } from "@/components/ServerComponents";

const page = () => {
  return (
    <div className="container">
      <Form />
      <section className="todosContainer"></section>
      <TodoItem
        title={"Sample task"}
        description={"This is the description of the sample task"}
        id={"sampleId"}
        completed={true}
      />
    </div>
  );
};

export default page;
