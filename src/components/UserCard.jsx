import React from "react";
import { Link } from "react-router";

const UserCard = ({user,setUser,users}) => {

    const{_id,name,email}=user;

    const handleDeleteBtn=(id)=>{
        fetch(`http://localhost:3000/users/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log("delete id:",data)
            if(data.deletedCount){
                const remaingUsers=users.filter(u=>u._id!==id)
                setUser(remaingUsers)
            }
        })
        console.log("deleted success",id);
    }
  return (
    <div >
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <p>
          {email}
          </p>
          <div className="card-actions">
            <button onClick={()=>handleDeleteBtn(_id)} className="btn btn-primary">Delete Now</button>
            <Link className="btn btn-accent" to={`/users/${_id}`}>Details</Link>
            <Link className="btn btn-info" to={`/update/${_id}`}>Update</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
