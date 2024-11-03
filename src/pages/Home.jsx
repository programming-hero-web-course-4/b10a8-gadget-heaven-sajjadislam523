import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
    const categories = useLoaderData();

    return (
        // <div className="grid grid-cols-3 gap-4 px-8 my-12 md:px-20">
        <div className="container flex p-8 mx-auto">
            {/* <div className="flex flex-col gap-4 px-2 py-2 border md:w-2/3 h-96 rounded-xl"> */}
            <div className="flex flex-col gap-4 p-4 mr-4 bg-white rounded-xl md:w-1/5 h-[410px]">
                {categories.map((category) => (
                    <Sidebar key={category.id} category={category} />
                ))}
            </div>
            {/* <div className="col-span-2 md:col-span-2"> */}
            <div className="w-2/3 lg:w-4/5">
                <Outlet />
            </div>
        </div>
    );
};

export default Home;
