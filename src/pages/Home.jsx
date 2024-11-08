import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home = () => {
    const categories = useLoaderData();

    return (
        <div>
            <Header />
            <Banner />
            <h1 className="text-2xl font-bold text-center md:text-4xl font-sora">
                Explore Cutting-Edge Gadgets
            </h1>
            <div className="container flex flex-col lg:flex-row p-4 sm:p-8 mx-auto mt-6">
                <div className="flex flex-col gap-4 p-4 mb-4 bg-white rounded-xl lg:w-1/5 lg:mb-0 h-auto lg:h-[410px]">
                    {categories.map((category) => (
                        <Sidebar key={category.id} category={category} />
                    ))}
                </div>
                <div className="w-full lg:w-4/5">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Home;
