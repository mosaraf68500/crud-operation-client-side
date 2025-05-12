import React from "react";

const UserCard = ({user}) => {

    const{name,email}=user;
  return (
    <div >
      <div className="card bg-base-100 shadow-sm">
        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <p>
          {email}
          </p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
