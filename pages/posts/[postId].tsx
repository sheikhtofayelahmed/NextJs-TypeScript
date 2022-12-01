import React from "react";

const Post = ({ post }: any) => {
  return (
    <div>
      <h1>{post.body}</h1>
    </div>
  );
};

export default Post;

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const paths = posts.map((data: any) => {
    return {
      params: {
        postId: `${data.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps(context: any) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await response.json();
  return {
    props: {
      post,
    },
  };
}
