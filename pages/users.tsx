import React from "react";
interface Result {
  result: object[],
 
}
const Users = ({ result }: Result) => {
  return <div>
    {
        result.map((data:any)=>      
         <>
          <h1>{data.name}</h1>
         </>
        )
    }
  </div>;
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
