import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div>
      <h1>welcome to product page</h1>
      <h1>Hello world</h1>
      <Link href="/">Link of the home</Link>
      <Link href="/product">Link of the product</Link>
      <Link href="/about" replace>Link of the about</Link>
    </div>
  );
};

export default index;
