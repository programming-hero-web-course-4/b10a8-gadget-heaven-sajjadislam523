import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ category }) => {
    return (
        <NavLink
            className={({ isActive }) =>
                `px-4 py-2 rounded-full transition duration-300 ${
                    isActive
                        ? "bg-purple-500 text-white hover:bg-purple-600"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                } font-sora font-medium`
            }
            to={`/category/${category.category}`}
        >
            {category.category}
        </NavLink>
    );
};

export default Sidebar;
