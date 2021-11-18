import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const UserItem = ({ user: { id, username, name } }) => {
  return (
    <div className="col-md-4">
      <div class="wrapper" style={{ margin: 30 }}>
        <div class="card">
          <h1>
            <Link to={`/users/${id}`}>
              <span class="enclosed">{username}</span>
            </Link>
            {name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
