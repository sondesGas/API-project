import React, { useEffect, useState } from "react";
import axios from "axios";
import UserItem from "./UserItem";

const UserList = ({ loading, setLoading, error, setError }) => {
  const [listOfUsers, setListOfUsers] = useState(null);

  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setListOfUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);
  return (
    <div className="container py-5">
      <h1>Users</h1>
      <div className="row">
        {loading ? (
          <div className=" d-flex justify-content-center">
            <div
              className="spinner-border text-primary text-center"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : error ? (
          <div className="alert alert-danger">{error}</div>
        ) : (
          listOfUsers &&
          listOfUsers.map((user) => <UserItem user={user} key={user.id} />)
        )}
      </div>
    </div>
  );
};

export default UserList;
