import React from 'react';

const User = () => {
    return (
        <div className='w-11/12 mx-auto bg-gray-200 rounded-3xl'>
            <div>
                <form>
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
        </div>
    );
};

export default User;