import React from "react";
import SearchResults from "./Search";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
    headers:{
      testHeader: 'testHeader'
    }
  });
  const data = await res.json();
  console.log("----------------fetchPosts333333");
  return data;
};
export default async function Search() {
  const post = await fetchPosts();

  return (
    <main className="flex space-x-4 divide-x-2 p-5">
      <div>
        <h1>Search</h1>
      </div>
      <div className="flex-1 pl-5">
        <SearchResults />
        <div>Search</div>
      </div>
    </main>
  );
}
