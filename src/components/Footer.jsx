import React from "react";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center p-10 bg-white">
            {/* Footer Title and Description */}
            <h1 className="mb-2 text-3xl font-bold text-black font-sora">
                Gadget Heaven
            </h1>
            <p className="mb-8 font-medium text-center text-gray-600 font-sora">
                Leading the way in cutting-edge technology and innovation.
            </p>

            {/* Divider */}
            <div className="w-2/3 mb-8 border-t border-gray-300"></div>

            {/* Footer Links Section */}
            <div className="flex flex-col justify-between w-full space-y-6 md:flex-row md:w-4/5 md:space-y-0 md:space-x-12">
                {/* Services Section */}
                <nav className="flex flex-col items-center md:items-start">
                    <h6 className="mb-2 font-bold text-black font-sora">
                        Services
                    </h6>
                    <a
                        href="#support"
                        className="text-gray-500 link link-hover hover:text-gray-800"
                    >
                        Product Support
                    </a>
                    <a
                        href="#tracking"
                        className="text-gray-500 link link-hover hover:text-gray-800"
                    >
                        Order Tracking
                    </a>
                    <a
                        href="#shipping"
                        className="text-gray-500 link link-hover hover:text-gray-800"
                    >
                        Shipping & Delivery
                    </a>
                    <a
                        href="#returns"
                        className="text-gray-500 link link-hover hover:text-gray-800"
                    >
                        Returns
                    </a>
                </nav>

                {/* Company Section */}
                <nav className="flex flex-col items-center md:items-start">
                    <h6 className="mb-2 font-bold text-black font-sora">
                        Company
                    </h6>
                    <a
                        href="#about"
                        className="text-gray-500 link link-hover hover:text-gray-800"
                    >
                        About Us
                    </a>
                    <a
                        href="#careers"
                        className="text-gray-500 link link-hover hover:text-gray-800"
                    >
                        Careers
                    </a>
                    <a
                        href="#contact"
                        className="text-gray-500 link link-hover hover:text-gray-800"
                    >
                        Contact
                    </a>
                </nav>

                {/* Legal Section */}
                <nav className="flex flex-col items-center md:items-start">
                    <h6 className="mb-2 font-bold text-black font-sora">
                        Legal
                    </h6>
                    <a
                        href="#terms"
                        className="text-gray-500 link link-hover hover:text-gray-800"
                    >
                        Terms of Service
                    </a>
                    <a
                        href="#privacy"
                        className="text-gray-500 link link-hover hover:text-gray-800"
                    >
                        Privacy Policy
                    </a>
                    <a
                        href="#cookie"
                        className="text-gray-500 link link-hover hover:text-gray-800"
                    >
                        Cookie Policy
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
