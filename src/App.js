import React from "react";
import { Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import UserList from "./components/UserList";
import UserListRedux from "./components/userListRedux";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/users" element={<UserListRedux />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
