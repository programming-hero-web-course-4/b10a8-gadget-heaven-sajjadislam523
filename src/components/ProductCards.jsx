import React from "react";
import { useLoaderData } from "react-router-dom";

const ProductCards = () => {
    const products = useLoaderData();

    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
            {products.map((product) => (
                <div
                    className="p-8 shadow-xl card bg-base-100"
                    key={product.id}
                >
                    <img
                        className="object-cover w-full rounded-box"
                        src={product.image}
                        alt={product.name}
                    />
                    <h1>{product.name}</h1>
                    <h1>{product.price}</h1>
                    <button>View Details</button>
                </div>
            ))}
        </div>
    );
};

export default ProductCards;
