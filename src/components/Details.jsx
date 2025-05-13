import React from 'react';
import { useLoaderData } from 'react-router';

const Details = () => {
    const users=useLoaderData();
    console.log(users)
    return (
        <div>
            
        </div>
    );
};

export default Details;