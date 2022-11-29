import { useRouter } from 'next/router';
import React from 'react';

const AllRouter= () => {
    const router=useRouter()
    const {params}=router.query
    console.log(params);
    return (
        <div>
            <h1>doc file page</h1>
        </div>
    );
};

export default AllRouter;