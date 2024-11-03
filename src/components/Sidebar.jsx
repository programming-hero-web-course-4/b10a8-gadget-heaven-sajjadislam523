import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ category }) => {
    const { name } = category;
    return (
        <div className="">
            <Link>{name}</Link>
        </div>
    );
};

export default Sidebar;
