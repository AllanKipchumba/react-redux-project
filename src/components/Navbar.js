import React, { useState } from "react";
import styles from "../css/style.module.css";
import "../css/styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <h1 className={styles.h1}>
          <Link to={"/"} className={styles.ulitem}>
            Redux Toolkit
          </Link>
        </h1>
        <ul className="flex ulitems">
          <li>
            <Link to={"/employees"} className={styles.ulitem}>
              Employees
            </Link>
          </li>
          <li>
            <Link to={"/counter"} className={styles.ulitem}>
              Counter
            </Link>
          </li>
          <li>
            <Link to={"/users"} className={styles.ulitem}>
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
