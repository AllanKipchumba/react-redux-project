import React, { useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/slices/userList.slice";

const UserListRedux = () => {
  const userSate = useSelector((store) => store["users"]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(getUsers());
    };
    fetchData();
  }, [dispatch]);

  const { loading, errorMessage, users } = userSate;

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

            {!loading && errorMessage && (
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

export default UserListRedux;
