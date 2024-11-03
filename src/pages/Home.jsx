import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div className="grid grid-cols-3 gap-4 px-8 my-12 md:px-20">
            <div className="flex flex-col gap-8">
                {categories.map((category) => (
                    <Sidebar key={category.id} category={category} />
                ))}
            </div>
            <div className="col-span-2">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
