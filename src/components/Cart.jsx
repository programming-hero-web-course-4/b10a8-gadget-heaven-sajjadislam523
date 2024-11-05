import { useNavigate, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Modal from "react-modal";
import image from "../assets/Group.png";

Modal.setAppElement("#root");

const Cart = () => {
    const { cartItem, handleRemoveCartItem, handleClearCart } =
        useOutletContext();
    const [sortedCartItems, setSortedCartItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setSortedCartItems(cartItem);
    }, [cartItem]);

    const handleSort = () => {
        const sortedItems = [...sortedCartItems].sort(
            (a, b) => b.price - a.price
        );
        setSortedCartItems(sortedItems);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        handleClearCart();
        navigate("/");
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
                    <button
                        onClick={openModal}
                        className="px-3 sm:px-4 py-1 sm:py-2 rounded-full font-semibold text-xs sm:text-sm lg:text-base font-sora bg-gradient-to-b from-[#862eda] via-[#a33de4] to-[#e464e4] text-white"
                    >
                        Purchase
                    </button>
                </div>
            </div>
            <div className="flex flex-col items-center min-h-screen gap-4 p-8 bg-gray-100">
                {sortedCartItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-center w-full gap-4 p-6 bg-white rounded-lg shadow-md"
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
                        <div className="flex-grow">
                            <h2 className="text-lg font-semibold text-gray-800">
                                {item.name}
                            </h2>
                            <p className="text-sm text-gray-500">
                                {item.description}
                            </p>
                            <p className="mt-1 font-semibold text-gray-700">
                                Price: ${item.price}
                            </p>
                        </div>

                        {/* Remove Button */}
                        <button
                            onClick={() => handleRemoveCartItem(item.id)}
                            className="p-2 text-red-600 bg-gray-100 rounded-full hover:bg-gray-200"
                        >
                            <IoCloseOutline className="text-2xl" />
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal Component */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Purchase Confirmation"
                style={{
                    content: {
                        top: "50%",
                        left: "50%",
                        right: "auto",
                        bottom: "auto",
                        marginRight: "-50%",
                        transform: "translate(-50%, -50%)",
                        padding: "20px",
                        borderRadius: "10px",
                        maxWidth: "400px",
                        textAlign: "center",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "10px",
                    },
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.75)",
                    },
                }}
            >
                <img src={image} alt="" />
                <h2 className="mb-4 text-2xl font-semibold font-sora">
                    Payment Successful
                </h2>
                <p className="text-xs text-gray-500 sm:text-sm lg:text-base font-sora">
                    Thanks for Purchasing.
                </p>
                <p className="text-xs text-gray-500 sm:text-sm lg:text-base font-sora">
                    Total cost: $
                    {sortedCartItems.reduce(
                        (total, item) => total + item.price,
                        0
                    )}
                </p>
                <button
                    onClick={closeModal}
                    className="mt-2 px-4 py-2 w-full font-sora rounded-full bg-[#9538E2] text-white font-semibold"
                >
                    Close
                </button>
            </Modal>
        </div>
    );
};

export default Cart;
