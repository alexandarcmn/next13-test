import "../styles/globals.css";
import Header from "./Header";

const fetchPosts = async (req) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  console.log("----------------fetchPosts000000", req);
  return data;
};

export default async function RootLayout(props) {
  // const posts = await fetchPosts();
  
  console.log('----------------RootLayout', props);

  return (
    <html>
      <head />
      <body>
        <Header />
        {props.children}
      </body>
    </html>
  );
}
