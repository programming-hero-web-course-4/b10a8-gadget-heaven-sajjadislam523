import React from "react";
import { useOutletContext } from "react-router-dom";
import { addToCart } from "../utils/Index";
import { BsCart3 } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";

const WishList = () => {
    const { favoriteItem, handleRemoveFavoriteItem } = useOutletContext();

    const handleAddToCart = (id) => {
        addToCart(id);
    };

    return (
        <div className="flex flex-col px-12 py-8">
            <div className="px-8 py-4">
                <h1 className="text-base font-bold md:text-lg lg:text-xl font-sora">
                    Wishlist
                </h1>
            </div>
            <div className="flex flex-col items-center gap-4 px-8 my-4">
                {favoriteItem.map((item) => (
                    <div
                        key={item.id}
                        className="flex w-full gap-6 p-4 bg-white border rounded-lg shadow-lg"
                    >
                        {/* Image Section */}
                        <div className="flex-shrink-0 w-32 h-32">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="object-cover w-full h-full rounded-lg"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col justify-between flex-grow">
                            <div>
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-gray-800">
                                        {item.name}
                                    </h2>
                                    <button
                                        onClick={() =>
                                            handleRemoveFavoriteItem(item.id)
                                        }
                                        className="p-1 text-red-800 border border-red-800 rounded-full "
                                    >
                                        <IoCloseOutline className="text-2xl" />
                                    </button>
                                </div>
                                <p className="mt-1 text-lg text-gray-700">
                                    ${item.price}
                                </p>
                                <p className="mt-2 text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <button
                                    onClick={() => handleAddToCart(item.id)}
                                    className="flex items-center gap-2 px-4 py-1 text-xs md:text-sm lg:text-base md:py-2 font-bold border rounded-full font-sora bg-[#9538E2] text-white hover:bg-white hover:text-[#9538E2] transition-all duration-200 ease-in-out"
                                >
                                    Add to Cart
                                    <BsCart3 />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WishList;
