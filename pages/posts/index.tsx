import Link from "next/link";
import React from "react";
interface Result {
  posts: object[];
}
const index = ({ posts }: Result) => {
  return (
    <div>
      {posts.map((data: any) => (
        <>
          <h1>{data.id}</h1>
          <Link href={`/posts/${data.id}`}>go to details page</Link>
        </>
      ))}
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  return {
    props: {
      posts: posts.slice(0, 3),
    },
  };
}
