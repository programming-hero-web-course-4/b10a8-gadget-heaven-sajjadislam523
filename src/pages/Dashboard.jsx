import { useEffect, useState } from "react";
import {
    useLoaderData,
    Outlet,
    useNavigate,
    useLocation,
} from "react-router-dom";
import {
    getCartData,
    getFavoriteData,
    removeCartItem,
    removeFavoriteItem,
    clearCart,
} from "../utils/Index";

const Dashboard = () => {
    const products = useLoaderData();
    const [cartItem, setCartItem] = useState([]);
    const [favoriteItem, setFavoriteItem] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    const isCart = location.pathname.endsWith("/cart");
    const isFavorite = location.pathname.endsWith("/wishlist");

    useEffect(() => {
        const storedCartItems = getCartData();
        const cartItems = products.filter((product) =>
            storedCartItems.includes(product.id)
        );
        setCartItem(cartItems);

        const storedFavoriteItems = getFavoriteData();
        const favoriteItems = products.filter((product) =>
            storedFavoriteItems.includes(product.id)
        );
        setFavoriteItem(favoriteItems);
    }, [products]);

    const handleRemoveCartItem = (productId) => {
        removeCartItem(productId);
        setCartItem(cartItem.filter((item) => item.id !== productId));
    };

    const handleRemoveFavoriteItem = (productId) => {
        removeFavoriteItem(productId);
        setFavoriteItem(favoriteItem.filter((item) => item.id !== productId));
    };

    useEffect(() => {
        if (location.pathname === "/dashboard") {
            navigate("cart", { replace: true });
        }
    }, [location, navigate]);

    const handleClearCart = () => {
        clearCart();
        setCartItem([]);
    };

    return (
        <div>
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
                    <button
                        onClick={() => navigate("cart")}
                        className={`px-4 py-1 text-xs border rounded-full sm:px-6 font-sora sm:text-sm lg:text-base ${
                            isCart ? "bg-white text-[#9538E2] font-bold" : ""
                        }`}
                    >
                        Cart
                    </button>
                    <button
                        onClick={() => navigate("wishlist")}
                        className={`px-4 py-1 text-xs border rounded-full sm:px-6 sm:text-sm font-sora lg:text-base ${
                            isFavorite
                                ? "bg-white text-[#9538E2] font-bold"
                                : ""
                        }`}
                    >
                        Wishlist
                    </button>
                </div>
            </div>
            <div className="pb-20">
                <Outlet
                    context={{
                        cartItem,
                        favoriteItem,
                        handleRemoveCartItem,
                        handleRemoveFavoriteItem,
                        handleClearCart,
                    }}
                />
            </div>
        </div>
    );
};

export default Dashboard;
