import React from 'react';
import { useLoaderData } from 'react-router';

const Update = () => {
    const updateUser=useLoaderData();
    const handleUpdateUser=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const email=e.target.email.value;
        console.log(name,email)
    }

    
    return (
        <div className='w-11/12 mx-auto grid grid-col justify-center rounded-2xl text-center items-center bg-gray-300'>
             <div>
                <form onSubmit={handleUpdateUser}>
                    <div>
                        <input className='bg-white border-2 w-[300px] p-3 rounded-3xl my-6' defaultValue={updateUser.name} type="text" name="name" id="" />
                    </div>
                    <div>
                        <input  className='bg-white border-2 w-[300px] p-3 rounded-3xl my-6' defaultValue={updateUser.email} type="email" name="email" id="" />
                    </div>
                    <div>
                        <input  className='bg-white border-2 w-[100px] cursor-pointer hover:bg-gray-400 p-3 rounded-3xl my-6' type="submit" value="Add user" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;