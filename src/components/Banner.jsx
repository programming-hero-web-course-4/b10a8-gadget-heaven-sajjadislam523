import React from "react";
import banner from "../assets/banner.jpg";

const Banner = () => {
    return (
        <div className="relative w-4/5 p-4 border md:w-4/5 md:left-20 lg:left-32 -top-40 md:-top-52 left-[51px] rounded-xl">
            <img
                className="rounded-xl w-full lg:h-[450px]"
                src={banner}
                alt="banner"
            />
        </div>
    );
};

export default Banner;
