import React from "react";

const Card = ({ product }) => {
    return (
        <div className="p-8 border bg-base-100 rounded-xl" key={product.id}>
            <img
                className="object-cover w-full rounded-box"
                src={product.image}
                alt={product.name}
            />
            <h1 className="text-2xl font-semibold font-sora">{product.name}</h1>
            <h1 className="text-[#09080F99] text-lg font-medium font-sora">
                Price: ${product.price}
            </h1>
            <button className="font-sora text-[#9538E2] border px-4 py-2 border-[#9538E2] font-semibold hover:bg-[#9538E2] hover:border-transparent hover:text-white transition-all duration-200 ease-in-out rounded-full">
                View Details
            </button>
        </div>
    );
};

export default Card;
