import { useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Cart = () => {
    const { cartItem } = useOutletContext();
    const [sortedCartItems, setSortedCartItems] = useState([]);

    useEffect(() => {
        setSortedCartItems(cartItem);
    }, [cartItem]);

    const handleSort = () => {
        const sortedItems = [...sortedCartItems].sort(
            (a, b) => b.price - a.price
        );
        setSortedCartItems(sortedItems);
    };

    return (
        <div className="px-12">
            <div className="flex flex-col py-4 space-y-4 md:flex-row md:items-center md:justify-between sm:px-8 sm:py-8 md:space-y-0">
                <h1 className="text-base font-bold md:text-lg lg:text-xl font-sora">
                    Cart
                </h1>
                <div className="flex flex-col items-start gap-2 md:items-center sm:flex-row sm:gap-4">
                    <p className="text-xs sm:text-sm lg:text-base font-sora">
                        Total cost: $
                        {sortedCartItems.reduce(
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
            <div className="flex flex-col items-center gap-4 px-8">
                {sortedCartItems.map((item) => (
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
                                    <button className="p-1 text-red-800 border border-red-800 rounded-full ">
                                        <IoCloseOutline className="text-2xl" />
                                    </button>
                                </div>

                                <p className="mt-2 text-sm text-gray-600">
                                    {item.description}
                                </p>
                                <p className="mt-1 text-lg text-gray-700">
                                    ${item.price}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
