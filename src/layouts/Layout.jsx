import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Outlet */}
            <div className="min-h-[calc(100vh-290px)] container mx-auto">
                <Outlet />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Layout;
