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
        alert("This product already exists in cart");
        return;
    } else {
        cartData.push(id);
        localStorage.setItem("cart", JSON.stringify(cartData));
        alert("Product added to cart");
    }
};

const removeCartItem = (id) => {
    const cartData = getCartData();
    const remaining = cartData.filter(cartId => cartId !== id)
    localStorage.setItem("cart", JSON.stringify(remaining));
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
        alert("This product already exists in favorite");
        return;
    } else {
        favoriteData.push(id);
        localStorage.setItem("favorite", JSON.stringify(favoriteData));
        alert("Product added to favorite");
    }
}

const removeFavoriteItem = (id) => {
    const favoriteData = getFavoriteData();
    const remaining = favoriteData.filter(favoriteId => favoriteId !== id)
    localStorage.setItem("favorite", JSON.stringify(remaining));
}


export { addToCart, getCartData, addToFavorite, getFavoriteData, removeCartItem, removeFavoriteItem, clearCart };