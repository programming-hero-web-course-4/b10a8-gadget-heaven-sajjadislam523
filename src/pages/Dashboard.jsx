import React, { useEffect, useState } from "react";
import { useLoaderData, NavLink } from "react-router-dom";
import { getCartData, getFavoriteData } from "../utils/Index";

const Dashboard = () => {
    const [cartItem, setCartItem] = useState([]);
    const [favoriteItem, setFavoriteItem] = useState([]);
    const products = useLoaderData();

    useEffect(() => {
        const storedCartItems = getCartData();
        const cartItems = products.filter((product) =>
            storedCartItems.includes(product.id)
        );
        setCartItem(cartItems);
    }, [products]);

    useEffect(() => {
        const storedFavoriteItems = getFavoriteData();
        const favoriteItems = products.filter((product) =>
            storedFavoriteItems.includes(product.id)
        );
        setFavoriteItem(favoriteItems);
    }, [products]);

    const handleSort = () => {
        const sortedItems = [...cartItem].sort((a, b) => b.price - a.price);
        setCartItem(sortedItems);
    };

    return (
        <div>
            {/* Header Section */}
            <div className="flex flex-col items-center bg-[#9538E2] text-white py-6 md:py-8 lg:py-12 space-y-4 md:space-y-8">
                <h1 className="text-lg font-bold md:text-2xl lg:text-3xl font-sora">
                    Dashboard
                </h1>
                <p className="px-4 text-xs text-center sm:text-sm md:text-base lg:text-lg font-sora md:px-8 lg:px-16">
                    Explore the latest gadgets that will take your experience to
                    the next level. From smart devices to
                    <br className="hidden lg:block" />
                    the coolest accessories, we have it all!
                </p>
                <div className="flex gap-2 sm:gap-4">
                    <NavLink className="px-4 py-1 text-xs border rounded-full sm:px-6 sm:text-sm lg:text-base">
                        Cart
                    </NavLink>
                    <NavLink className="px-4 py-1 text-xs border rounded-full sm:px-6 sm:text-sm lg:text-base">
                        Wishlist
                    </NavLink>
                </div>
            </div>

            {/* Cart Section */}
            <div className="flex flex-col px-4 py-4 space-y-4 md:flex-row md:items-center md:justify-between sm:px-8 sm:py-8 md:space-y-0">
                <h1 className="text-base font-bold md:text-lg lg:text-xl font-sora">
                    Cart
                </h1>
                <div className="flex flex-col items-start gap-2 md:items-center sm:flex-row sm:gap-4">
                    <p className="text-xs sm:text-sm lg:text-base font-sora">
                        Total cost: $
                        {cartItem.reduce(
                            (total, item) => total + item.price,
                            0
                        )}
                    </p>
                    <button
                        onClick={handleSort}
                        className="px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-xs sm:text-sm lg:text-base font-sora border border-[#9538E2] text-[#9538E2]"
                    >
                        Sort by Price
                    </button>
                    <button className="px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-xs sm:text-sm lg:text-base font-sora bg-[#9538E2] text-white">
                        Purchase
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
