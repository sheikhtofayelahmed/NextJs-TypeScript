import { useRouter } from "next/router";
import React from "react";

const Post = ({ post }: any) => {
  const router = useRouter();

  //this code is for the id who is not statically generated for the build version
  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }
// ---- //

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
    fallback: true,
  };
};

export async function getStaticProps(context: any) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const post = await response.json();

  //this code is for not found page if there is no id like this
  if (!post.id) {
    return {
      notFound:true
    }
  }
  return {
    props: {
      post,
    },
    //there's might be a revalidate key
    //incremental static regeneration
  };
}
