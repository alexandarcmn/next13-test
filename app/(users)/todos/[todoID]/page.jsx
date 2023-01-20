import React from "react";
import { notFound } from "next/navigation";

export const dynamicParams = true;

const fetchTodo = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  return data;
};

export default async function TodoPage({ params: { todoID } }) {
  const todo = await fetchTodo(todoID);

  if(!todo.id) return notFound();

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>

      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  );
}

// generating 
export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  const trimTodos = data.splice(0, 10);

  return trimTodos.map((el) => ({ todoID: el.id.toString() }));
}
