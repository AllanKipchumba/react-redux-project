import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styles from "../css/style.module.css";
import "../css/styles.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => setNav(!nav);

  const [showMenuItems, setShowMenuItems] = useState(true);
  const handleClick = () => setShowMenuItems(!showMenuItems);

  return (
    <>
      <nav className={styles.nav}>
        <h1 className={styles.h1}>Redux Toolkit</h1>
        <ul className="hidden md:flex ulitems">
          <li>
            <Link to={"/employees"}>Employees</Link>
          </li>
          <li>
            <Link to={"/counter"}>Counter</Link>
          </li>
          <li>
            <Link to={"/users"}>Users</Link>
          </li>
        </ul>

        {/* Navigigation menu */}
        <div onClick={handleNav} className="block md:hidden">
          {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* <div className={!showMenuItems ? "hidden" : null}> */}
        <div className={!nav ? styles.showNav : styles.hideNav}>
          <h1 className={styles.h1}>Redux Toolkit</h1>

          <ul className={styles.navItems}>
            <li onClick={handleClick}>
              <Link to={"/employees"}>Employees</Link>
            </li>
            <li onClick={handleClick}>
              <Link to={"/counter"}>Counter</Link>
            </li>
            <li onClick={handleClick}>
              <Link to={"/users"}>Users</Link>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    </>
  );
};

export default Navbar;
