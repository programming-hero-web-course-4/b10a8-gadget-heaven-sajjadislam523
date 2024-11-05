import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
    return (
        <div className="flex flex-col items-start p-6 space-y-4 border bg-white shadow-lg rounded-xl min-h-[400px] transition-transform duration-200 ease-in-out hover:scale-105">
            <img
                className="object-cover w-full max-h-56 rounded-lg aspect-w-4 aspect-h-3"
                src={product.image}
                alt={product.name}
            />

            <div className="flex-grow">
                <h1 className="text-xl font-semibold font-sora line-clamp-2 h-14">
                    {product.name}
                </h1>
                <p className="text-gray-600 text-lg font-medium font-sora mt-2">
                    Price: ${product.price}
                </p>
            </div>

            <Link
                to={`/product/${product.id}`}
                className="mt-auto font-sora text-[#9538E2] border px-4 py-2 border-[#9538E2] font-semibold hover:bg-[#9538E2] hover:border-transparent hover:text-white transition-all duration-200 ease-in-out rounded-full"
            >
                View Details
            </Link>
        </div>
    );
};

export default Card;
