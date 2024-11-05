import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import errorImg from "../assets/error-404.png";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 text-center">
            <div className="max-w-md">
                {/* Graphic/Image Section */}
                <img
                    src={errorImg}
                    alt="404 Not Found"
                    className="w-full max-w-xs mx-auto mb-8"
                />

                {/* Title and Message */}
                <h1 className="text-4xl font-bold font-sora text-[#9538E2] mb-4">
                    Oops! Page Not Found
                </h1>
                <p className="text-gray-700 font-sora text-lg mb-6">
                    We can’t seem to find the page you’re looking for. It might
                    have been removed or is temporarily unavailable.
                </p>

                <Link
                    to="/"
                    className="flex items-center justify-center gap-2 px-6 py-3 text-white bg-[#9538E2] rounded-full hover:bg-purple-600 transition duration-200"
                >
                    <FiArrowLeft className="text-lg" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
