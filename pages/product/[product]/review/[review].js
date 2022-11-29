import React from "react";
import { useRouter } from "next/router";
const Review = () => {
  const router= useRouter();
  const { product, review } =router.query
  console.log(product,review);
  return (
    <div>
      <h1>
        product {product} review {review}
      </h1>
    </div>
  );
};

export default Review;
