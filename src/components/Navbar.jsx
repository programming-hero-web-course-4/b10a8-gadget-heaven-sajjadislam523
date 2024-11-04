import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";

const Navbar = () => {
    const location = useLocation();
    const isHome =
        location.pathname === "/" ||
        location.pathname === "/category/All%20Products" ||
        location.pathname === "/category/Laptops" ||
        location.pathname === "/category/Smartphones" ||
        location.pathname === "/category/Tablets" ||
        location.pathname === "/category/Headphones" ||
        location.pathname === "/category/Smartwatches" ||
        location.pathname === "/category/Gaming";

    const navLinkClass = ({ isActive }) => {
        return `px-2 font-semibold ${
            isHome
                ? `text-white hover:underline ${
                      isActive
                          ? "underline underline-offset-4 decoration-2"
                          : ""
                  }`
                : `text-black hover:text-purple-500 ${
                      isActive ? "text-purple-500 font-bold" : ""
                  }`
        }`;
    };

    return (
        <div
            className={`navbar lg:px-12 md:px-10 ${
                isHome
                    ? "absolute w-full px-10 mx-auto text-white"
                    : "bg-white shadow-lg text-gray-800"
            }`}
        >
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
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md ${
                                    isActive ? "font-bold underline" : ""
                                } ${isHome ? "text-white" : "text-gray-800"}`
                            }
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/statistics"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md ${
                                    isActive ? "font-bold underline" : ""
                                } ${isHome ? "text-white" : "text-gray-800"}`
                            }
                        >
                            Statistics
                        </NavLink>
                        <NavLink
                            to="/dashboard"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-md ${
                                    isActive ? "font-bold underline" : ""
                                } ${isHome ? "text-white" : "text-gray-800"}`
                            }
                        >
                            Dashboard
                        </NavLink>
                    </ul>
                </div>

                <Link
                    to="/"
                    className="text-xl font-semibold lg:ml-12 btn btn-ghost"
                >
                    Gadget Heaven
                </Link>
            </div>

            <div className="hidden navbar-center lg:flex ml">
                <ul className="gap-8 px-1 menu menu-horizontal">
                    <NavLink className={navLinkClass} to="/">
                        Home
                    </NavLink>
                    <NavLink className={navLinkClass} to="/statistics">
                        Statistics
                    </NavLink>
                    <NavLink className={navLinkClass} to="/dashboard">
                        Dashboard
                    </NavLink>
                </ul>
            </div>

            <div className="flex gap-3 lg:pr-4 navbar-end">
                <Link
                    to="/dashboard"
                    className="p-2 transition border rounded-full hover:bg-gray-100"
                >
                    <BsCart3 className="" />
                </Link>
                <Link
                    to="/favorites"
                    className="p-2 transition border rounded-full hover:bg-gray-100"
                >
                    <FiHeart className="" />
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
