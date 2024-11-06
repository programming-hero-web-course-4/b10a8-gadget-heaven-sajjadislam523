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
            <div className="flex flex-col items-center min-h-screen gap-6 px-4 py-8 bg-gray-100">
                {favoriteItem.map((item) => (
                    <div
                        key={item.id}
                        className="flex flex-col items-center w-full gap-6 p-6 bg-white border rounded-lg shadow-lg md:flex-row"
                    >
                        {/* Image Section */}
                        <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="object-cover w-full h-full rounded-md"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="flex flex-col flex-grow">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-800">
                                    {item.name}
                                </h2>
                                <button
                                    onClick={() =>
                                        handleRemoveFavoriteItem(item.id)
                                    }
                                    className="p-2 text-red-600 bg-gray-100 rounded-full hover:bg-gray-200"
                                >
                                    <IoCloseOutline className="text-2xl" />
                                </button>
                            </div>

                            <p className="mt-1 font-semibold text-gray-700">
                                Price: ${item.price}
                            </p>

                            <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                                {item.description}
                            </p>

                            <div className="flex items-center gap-2 mt-4">
                                <button
                                    onClick={() => handleAddToCart(item.id)}
                                    className="flex items-center gap-2 px-4 py-2 text-xs font-bold text-white transition-all duration-200 ease-in-out bg-purple-700 border border-purple-700 rounded-full hover:bg-white hover:text-purple-700"
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
