import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
    return (
        <div
            className="flex flex-col items-start p-6 space-y-4 border bg-base-100 rounded-xl min-h-[350px]"
            key={product.id}
        >
            <img
                className="object-cover w-full mb-4 max-h-48 rounded-box"
                src={product.image}
                alt={product.name}
            />

            <h1 className="text-xl font-semibold font-sora">{product.name}</h1>
            <h1 className="text-[#09080F99] text-lg font-medium font-sora">
                Price: ${product.price}
            </h1>
            <Link
                to={`/product/${product.id}`}
                className="font-sora text-[#9538E2] border px-4 py-2 border-[#9538E2] font-semibold hover:bg-[#9538E2] hover:border-transparent hover:text-white transition-all duration-200 ease-in-out rounded-full hover:scale-105"
            >
                View Details
            </Link>
        </div>
    );
};

export default Card;
