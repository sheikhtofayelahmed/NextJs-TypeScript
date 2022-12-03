import React from "react";
import useSWR from "swr";
async function getAPI() {
  const response = await fetch("api/comments");
  const result = response.json();
  return result;
}
const Comment = () => {
  const { data, error } = useSWR<any>("get request", getAPI);
  if (error) {
    return "error";
  }
  if (!data) {
    return <h1>Loading...</h1>;
  }

  return <div>{data.comment}</div>;
};

export default Comment;
