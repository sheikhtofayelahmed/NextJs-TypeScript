import React from "react";
import useSWR from "swr";
const fetcher = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  return result;
};
const SWR = () => {
  const { data, error } = useSWR<any, any>("post", fetcher);
  if (error) {
    return "error occurred";
  }
  if (!data) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {data.map((data: any) => (
        <div key={data.id}>
          <h1>{data.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default SWR;
