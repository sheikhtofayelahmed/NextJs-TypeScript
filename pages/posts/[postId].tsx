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
  return {
    paths: [
      {
        params: {
          postId: "1",
        },
      },
      {
        params: {
          postId: "2",
        },
      },
      {
        params: {
          postId: "3",
        },
      },
    ],
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
