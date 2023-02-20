import { NextResponse } from "next/server";
import requestIp from "request-ip";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  console.log("----------------fetchPosts222222222");
  return data;
};

// This function can be marked `async` if using `await` inside
export async function middleware(req) {
  // const detectedIp = requestIp.getClientIp(request)
  // const posts = await fetchPosts();
  // rewrite the request path to new given path
  // if (request.nextUrl.pathname.startsWith("/promotions")) {
  //   return NextResponse.rewrite(new URL("/promotions-2", request.url));
  // }
  // console.log("----middleware", req.nextUrl);

  // redirect the request path to new given path
  // only for bellow defined paths in config
  // return NextResponse.redirect(new URL("/promotions-2", request.url));
  // return (req.nextUrl.searchParams = new URLSearchParams({ name: "test" }));
  // return NextResponse;
}

// matcher, if present, is a glob pattern that matches the request path
// all routes that has start with /promotions will be redirected to new path as /promotions-2
// it can be a string or an array of strings
// e.g. "/promotions/*" or ["/promotions/:path*", "/cashier/:path*"]
// export const config = {
//   matcher: "/promotions/:path*",
// };
