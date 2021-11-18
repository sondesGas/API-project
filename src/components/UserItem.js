import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user: { id, username, name } }) => {
  return (
    <div className="col-md-4">
      <div className="card my-3">
        <div className="card-body">
          <Link to={`/users/${id}`}>
            <h5>{username}</h5>
          </Link>
          <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
