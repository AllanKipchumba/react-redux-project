import { createSlice } from "@reduxjs/toolkit";
import { EmployeeService } from "../../services/employeeService";

const initialState = {
  employees: EmployeeService.getAllEmployeeList(),
};

const employeeSlice = createSlice({
  name: "employees",
  initialState: initialState,
  reducers: {
    updateSelected: (state, action) => {
      state.employees = state.employees.map((employee) => {
        if (employee.id === action.payload) {
          return {
            ...employee,
            isSelected: !employee.isSelected,
          };
        } else return employee;
      });
    },
  },
});
// export actions
export const { updateSelected } = employeeSlice.actions;
// export reducer
export default employeeSlice.reducer;
