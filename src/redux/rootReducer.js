import counterReducer from "./slices/counter.slices";
import employeesReducer from "./slices/employees.slices";
import userListReducer from "./slices/userList.slice";

const rootReducer = {
  counter: counterReducer,
  employees: employeesReducer,
  users: userListReducer,
};

export default rootReducer;
