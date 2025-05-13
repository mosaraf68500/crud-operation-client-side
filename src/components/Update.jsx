import React from 'react';
import { useLoaderData } from 'react-router'; // ✅ ঠিক router-dom

const Update = () => {
    const loadedUser = useLoaderData(); // ✅ নাম পরিবর্তন করা হলো
    console.log(loadedUser._id);

    const handleUpdateUser = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email }; // ✅ ভিন্ন নাম

        fetch(`http://localhost:3000/users/${loadedUser._id}`, { // ✅ সঠিক আইডি ব্যবহার
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log('User updated successfully:', data);
                // alert বা UI feedback দিতে পারো
            });
    };

    return (
        <div className='w-11/12 mx-auto grid grid-col justify-center rounded-2xl text-center items-center bg-gray-300'>
            <div>
                <form onSubmit={handleUpdateUser}>
                    <div>
                        <input
                            className='bg-white border-2 w-[300px] p-3 rounded-3xl my-6'
                            defaultValue={loadedUser.name}
                            type="text"
                            name="name"
                        />
                    </div>
                    <div>
                        <input
                            className='bg-white border-2 w-[300px] p-3 rounded-3xl my-6'
                            defaultValue={loadedUser.email}
                            type="email"
                            name="email"
                        />
                    </div>
                    <div>
                        <input
                            className='bg-white px-4 border-2 w-[100px] cursor-pointer hover:bg-gray-400 p-3 rounded-3xl my-6'
                            type="submit"
                            value="Update User"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
