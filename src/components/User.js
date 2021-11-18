import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const User = ({ loading, setLoading, error, setError }) => {
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  const handleClick = () => {
    //console.log(history);
    history.goBack();
  };

  const getUser = async (id) => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setUser(res.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!loading) {
      setLoading(true);
    }

    getUser(id);
    /*axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setLoading(false);
      });*/
  }, []);
  return (
    <div className="container py-5">
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
        user && (
          <div>
            <h1>{user.name}</h1>
            <p>
              <span className="text-secondary">user name</span>: {user.username}
            </p>
            <p>
              <span className="text-secondary">email:</span> {user.email}
            </p>
            <p>
              <span className="text-secondary">address:</span>{" "}
              {user.address.street} {user.address.suite} {user.address.city}{" "}
              {user.address.zipcode}
            </p>
            <p>
              <span className="text-secondary">phone:</span> {user.phone}
            </p>
            <p>
              <span className="text-secondary">website:</span> {user.website}
            </p>
            <p>
              <span className="text-secondary">company name:</span>{" "}
              {user.company.name}
            </p>
            <p>
              <span className="text-secondary">company catch phrase:</span>{" "}
              {user.company.catchPhrase}
            </p>
            <p>
              <span className="text-secondary">company bs:</span>{" "}
              {user.company.bs}
            </p>
          </div>
        )
      )}
      <button className="btn btn-primary" onClick={handleClick}>
        Go back
      </button>
    </div>
  );
};

export default User;
