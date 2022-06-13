import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelected } from "../redux/slices/employees.slices";

const Employees = () => {
  // get data from redux  store
  const employeesState = useSelector((store) => store["employees"]);
  const { employees } = employeesState;

  const dispatch = useDispatch();

  // const changeSelected = (empID) => {
  //   // dispatch an action
  //   dispatch(updateSelected(empID));
  // };

  return (
    <>
      <div className="container mt-5 ">
        <div>
          <p className="font-bold text-2xl">Employees</p>
          <p className="">Check the name to display checked names</p>
        </div>

        <div className="grid md:grid-cols-2">
          <div className="">
            <ul className="list-group">
              {employees.length > 0 &&
                employees.map((employee) => {
                  return (
                    <li key={employee.id} className="list-group-item">
                      <input
                        type="checkbox"
                        onChange={() => dispatch(updateSelected(employee.id))}
                        className="form-check-input me-2"
                      />
                      {employee.name}
                    </li>
                  );
                })}
            </ul>
          </div>

          <div>
            {employees.length > 0 &&
              employees.map((employee) => {
                return (
                  <div key={employee.id}>
                    {employee.isSelected && (
                      <div className="card my-2 md:ml-2">
                        <div className="card-body">
                          <ul>
                            <li className="list-group-item">
                              Name:{" "}
                              <span className="fw-bold">{employee.name}</span>
                            </li>
                            <li className="list-group-item">
                              Email:{" "}
                              <span className="fw-bold">{employee.email}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Employees;
