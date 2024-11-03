import React from "react";

const Header = () => {
    return (
        <div className="mx-6 rounded-xl pt-8 pb-20 lg:mx-12 bg-[#9538E2] text-white">
            <div className="flex flex-col items-center w-4/5 gap-4 px-4 pt-8 pb-24 mx-auto md:pb-40 rounded-xl">
                <h1 className="text-xl font-bold text-center lg:leading-normal font-sora lg:text-5xl md:text-3xl">
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h1>
                <p className="text-xs text-center lg:text-base lg:font-normal font-sora">
                    Explore the latest gadgets that will take your experience to
                    the next level. From smart devices to the <br /> coolest
                    accessories, we have it all!
                </p>
                <button className="px-4 py-2 rounded-full font-semibold font-sora bg-white text-[#9538E2]">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default Header;
