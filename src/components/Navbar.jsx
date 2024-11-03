import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5"
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
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        <NavLink to="">Home</NavLink>
                        <NavLink to="/statistics">Statistics</NavLink>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </ul>
                </div>
                <a className="text-xl btn btn-ghost">Gadget Heaven</a>
            </div>
            <div className="hidden navbar-center lg:flex">
                <ul className="gap-4 px-1 menu menu-horizontal">
                    <NavLink to="">Home</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </ul>
            </div>
            <div className="gap-4 navbar-end">
                <Link to="/login">Cart</Link>
                <Link to="/login">wishlist</Link>
            </div>
        </div>
    );
};

export default Navbar;
