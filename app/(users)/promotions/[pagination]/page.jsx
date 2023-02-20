import React from "react";

const fetchPosts = async (pagination) => {
  const paginationParam = pagination ? pagination * 5 : 0;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${paginationParam}&_limit=5`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();
  // console.log("----------------fetchPosts222222222");
  return data;
};

export default async function PromotionData({ params: { pagination } }) {
  const promotions = await fetchPosts(pagination);

  return (
    <div>
      {promotions.map(({ id, title }) => {
        return (
          <p key={id}>
            <div>
              Promotion: {id + " - " + title}
            </div>
          </p>
        );
      })}
    </div>
  );
}
