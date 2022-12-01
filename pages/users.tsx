import React from "react";
import User from "../components/user";
interface Result {
  result: object[];
}

const Users = ({ result }: Result) => {
  return (
    <div>
      {result.map((data: any) => (
        <>
          <User user={data}></User>
        </>
      ))}
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  return {
    props: {
      result,
    },
  };
}
