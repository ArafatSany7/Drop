import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineBloodtype } from "react-icons/md";

const NavBar = () => {
  const navOption = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to="/registration">Register Now</NavLink>
      </li>
      <li>
        <NavLink to="/find-blood">Find Blood</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-50  backdrop-blur-md border-b border-white/10 shadow-sm font-primary px-4 lg:px-10 text-white">
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
            className="menu menu-sm dropdown-content bg-neutral-900/95 text-white backdrop-blur rounded-box z-10 mt-3 w-56 p-3 shadow-lg lg:hidden"
          >
            {navOption}
            <li className="mt-2">
              <Link
                to="/registration"
                className="btn btn-dash w-full bg-rose-700 text-white border-rose-700 hover:bg-white hover:text-black"
              >
                Log in
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <MdOutlineBloodtype size={38} className="text-rose-700" />
          <span className="hidden sm:inline text-lg tracking-tight">Drop</span>
        </Link>
      </div>

      <div className="navbar-end flex items-center space-x-4">
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {navOption}
        </ul>
        <Link
          to="/registration"
          className="btn btn-dash transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-white hover:text-black hover:border-b-2 hover:border-b-red-800 bg-rose-700 text-white border-rose-700"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
