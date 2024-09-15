import React from "react";
import Form from "@/app/addTodoForm";
import { TodoItem } from "@/components/ServerComponents";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const fetchTodo = async (token) => {
  try {
    console.log(`${process.env.URL}/api/mytask`);
    const res = await fetch(`${process.env.URL}/api/mytask`, {
      cache: "no-cache",
      headers: {
        Cookie: `token=${token}`,
      },
    });
    const data = await res.json();

    if (!data.success) return [];

    return data.tasks;
  } catch (error) {
    return [];
  }
};

const page = async () => {
  const token = cookies().get("token")?.value;

  if (!token) return redirect("/login");

  const tasks = await fetchTodo(token);
  return (
    <div className="container">
      <Form />
      <section className="todosContainer">
        {tasks?.map((i) => (
          <TodoItem
            title={i.title}
            description={i.description}
            id={i._id}
            key={i._id}
            completed={i.isCompleted}
          />
        ))}
      </section>
    </div>
  );
};

export default page;
