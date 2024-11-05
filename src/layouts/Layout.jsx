import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserContextProvider from "../context/UserContextProvider";

const Layout = () => {
    return (
        <div>
            <UserContextProvider>
                <Navbar />
                <div className="min-h-[calc(100vh-290px)] bg-gray-50">
                    <Outlet />
                </div>
                <Footer />

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    pauseOnHover
                    theme="light"
                    className="font-sora"
                />
            </UserContextProvider>
        </div>
    );
};

export default Layout;
