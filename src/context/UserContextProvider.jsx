import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    const [favoriteItem, setFavoriteItem] = useState([]);
    return (
        <UserContext.Provider
            value={{ cartItem, setCartItem, favoriteItem, setFavoriteItem }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
