import React, { use, useState } from 'react';
import UserCard from './UserCard';


const User = ({UserPromise}) => {

    const initialUsers=use(UserPromise)
    const [users, setUser]=useState(initialUsers);

    const handleAddUser =e=>{
    e.preventDefault();
    const name=e.target.name.value;
    const email=e.target.email.value;
    const newUser={name,email};
    console.log(newUser);

    fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(newUser)
    })
    .then(res=>res.json())
    .then(data =>{
        console.log('after the insert data',data);
        if(data.insertedId){
            newUser._id=data.insertedId;
            const newUsers=[...users,newUser];
            setUser(newUsers)
            alert("user added successfully");
            e.target.reset();
        }
    })
}
    return (
        <div className='w-11/12 mx-auto bg-gray-200 rounded-3xl'>
            <div>
                <form onSubmit={handleAddUser}>
                    <div>
                        <input className='bg-white border-2 w-[300px] p-3 rounded-3xl my-6' placeholder=' Enter Your Name' type="text" name="name" id="" />
                    </div>
                    <div>
                        <input  className='bg-white border-2 w-[300px] p-3 rounded-3xl my-6' placeholder='Enter Your email' type="email" name="email" id="" />
                    </div>
                    <div>
                        <input  className='bg-white border-2 w-[100px] cursor-pointer hover:bg-gray-400 p-3 rounded-3xl my-6' type="submit" value="Add user" />
                    </div>
                </form>
            </div>

            <div className='grid grid-cols-3 gap-4 border-2 p-4 justify-center items-center'>
                {
                    users.map(user=><UserCard key={user._id} user={user}></UserCard>)
                }
            </div>
        </div>
    );
};

export default User;