import counterReducer from "./slices/counter.slices";
import employeesReducer from "./slices/employees.slices";

const rootReducer = {
  counter: counterReducer,
  employees: employeesReducer,
};

export default rootReducer;
