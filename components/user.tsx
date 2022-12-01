import Link from "next/link";
import React from "react";

const User = ({ user }: any) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <Link href={`/users/${user.id}`}>
        go to page
      </Link>
    </div>
  );
};

export default User;
