import React from 'react';
import {useRouter} from 'next/router'
const ProductDetails = () => {
    const product=useRouter()
    return (
        <div>
            <h1>product number -{product.query.productId}</h1>
        </div>
    );
};

export default ProductDetails;