import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineBloodtype } from "react-icons/md";

const NavBar = () => {
  const navOption = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to="/registration">Register Now</Link>
      </li>
      <li>
        <Link to="/find-blood">Find Blood</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-50 bg-base-100 shadow-sm font-primary px-4 lg:px-10">
      <div className="navbar-start gap-2">
        <div className="dropdown">
          <button
            tabIndex={0}
            type="button"
            className="btn btn-ghost lg:hidden"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow lg:hidden"
          >
            {navOption}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <MdOutlineBloodtype size={38} />
          <span className="hidden sm:inline">Drop</span>
        </Link>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {navOption}
        </ul>
        <Link
          to="/registration"
          className="btn btn-dash transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-black hover:text-white hover:border-b-2 hover:border-b-red-800"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
