import React from "react";
import Link from "next/link";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next: { revalidate: 60 },});
  const data = await res.json();
  console.log("----------------fetchPosts222222222");
  return data;
};

export default async function Promotions() {
  const promotions = await fetchPosts();

  return (
    <div>
      {promotions.map(({ id, title }) => {
        return (
          <p key={id}>
            <Link href={`/promotions/${id}`}>
              Promotion: {id + " - " + title}
            </Link>
          </p>
        );
      })}
    </div>
  );
}
