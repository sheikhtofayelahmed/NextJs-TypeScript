import React from "react";
import { useRouter } from "next/router";
const Review = () => {
  const { product, review } = useRouter();
  return (
    <div>
      <h1>
        product {product} review {review}
      </h1>
    </div>
  );
};

export default Review;
