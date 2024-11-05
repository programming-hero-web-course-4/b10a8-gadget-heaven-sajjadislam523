import { toast } from "react-toastify";

const getCartData = () => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
        const storedData = JSON.parse(cartData);
        return storedData;
    } else {
        return [];
    }
};


const addToCart = (id) => {
    const cartData = getCartData();

    if (cartData.includes(id)) {
        toast.error("This product already exists in the cart.");
        return;
    } else {
        cartData.push(id);
        localStorage.setItem("cart", JSON.stringify(cartData));
        toast.success("Product added to cart.");
    }
};

const removeCartItem = (id) => {
    const cartData = getCartData();
    const remaining = cartData.filter(cartId => cartId !== id)
    localStorage.setItem("cart", JSON.stringify(remaining));
    toast.info("Item removed from cart.");
}

const clearCart = () => {
    localStorage.removeItem("cart");
}


const getFavoriteData = () => {
    const favoriteData = localStorage.getItem("favorite");
    if (favoriteData) {
        const storedData = JSON.parse(favoriteData);
        return storedData;
    } else {
        return [];
    }
};

const addToFavorite = (id) => {
    const favoriteData = getFavoriteData();

    if (favoriteData.includes(id)) {
        toast.error("This product already exists in favorites.");
        return;
    } else {
        favoriteData.push(id);
        localStorage.setItem("favorite", JSON.stringify(favoriteData));
        toast.success("Product added to favorites.");
    }
}

const removeFavoriteItem = (id) => {
    const favoriteData = getFavoriteData();
    const remaining = favoriteData.filter(favoriteId => favoriteId !== id)
    localStorage.setItem("favorite", JSON.stringify(remaining));
    toast.info("Item removed from favorites.");
}


export { addToCart, getCartData, addToFavorite, getFavoriteData, removeCartItem, removeFavoriteItem, clearCart };