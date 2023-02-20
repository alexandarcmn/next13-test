import React, { Suspense } from "react";
import TodoList from "./(users)/todos/TodosList";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
    headers:{
      testHeader: 'testHeader'
    }
  });
  const data = await res.json();
  // console.log("----------------fetchPosts11111");
  return data;
};

export default async function HomePage() {
  const promotions = await fetchPosts();

  return (
    <div className="flex flex-col space-y-10">
      {/* <Suspense fallback={<p className="text-red-500">Loading Games....</p>}>
        <h1>All Games</h1>
        <div className="flex space-x-2">
          <TodoList />
        </div>
      </Suspense> */}
      <Suspense
        fallback={<p className="text-blue-500">Loading Promotions....</p>}
      >
        <h1>All Promotions</h1>
        <div className="flex space-x-2">
          {promotions.map(({ id, title }) => {
            return <p key={id}>Promotion: {id + " - " + title}</p>;
          })}
        </div>
      </Suspense>
    </div>
  );
}
