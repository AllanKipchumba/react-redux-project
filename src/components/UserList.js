import axios from "axios";
import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";

const UserList = () => {
  const [state, setState] = useState({
    loading: false,
    users: [],
    errorMessage: "",
  });

  useEffect(() => {
    try {
      // set state to previous value except that loading is true
      setState({ ...state, loading: true });

      const fetchata = async () => {
        const dataUrl = "https://jsonplaceholder.typicode.com/users";
        const response = await axios.get(dataUrl);
        setState({ ...state, users: response.data, loading: false });
      };
      fetchata();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // destructure stateful objects
  const { loading, users, errorMessage } = state;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3 text-primary">User List</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {loading && <PulseLoader color={"#3985C2"} size={10} />}

            {!loading && errorMessage.length > 0 && (
              <h3 className="text-danger">{errorMessage}</h3>
            )}

            {!loading && users.length > 0 && (
              <table className="table table-hover text-center table-striped">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>SNO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Company</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>{user.company.name}</td>
                        <td>{user.address.city}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserList;
