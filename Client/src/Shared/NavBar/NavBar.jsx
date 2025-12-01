import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navOption = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link>About Us</Link>
      </li>
      <li>
        <Link>Find Blood</Link>
      </li>
      <li>
        <Link>Register Now</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm font-primary">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navOption}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex ">
        {/* Center content can remain empty or be used for other purposes */}
      </div>
      <div className="navbar-end flex items-center space-x-4">
        <ul className="menu menu-horizontal px-1">{navOption}</ul>
        <button className="btn btn-dash transition delay-150 duration-300 ease-in-out hover:-translate-y-1  hover:bg-white hover:text-black">
          Log in
        </button>
      </div>
    </div>
  );
};

export default NavBar;
