import Link from "next/link";
import React from "react";

const fetchTodos = async () => {
  // timeout to simulate slow network
  const timeout = Math.floor(Math.random() * 5 + 1) * 1000;
  await new Promise((resolve) => setTimeout(resolve, timeout));
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
};

export default async function TodosList() {
  const todos = await fetchTodos();

  return (
    <>
      {todos.map(({ id, title }) => {
        return (
          <p key={id}>
            <Link href={`/todos/${id}`}>Todo: {id + " - " + title}</Link>
          </p>
        );
      })}
    </>
  );
}
