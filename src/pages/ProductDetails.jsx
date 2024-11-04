import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { addToCart, addToFavorite } from "../utils/Index";

const ProductDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        const singleProduct = data.find((product) => product.id === id);
        setProduct(singleProduct || {});
    }, [data, id]);

    const {
        name,
        image,
        description,
        price,
        specification = [],
        availability,
        rating,
    } = product;

    const handleAddToCart = (id) => {
        addToCart(id);
    };

    const handleAddToFavorite = (id) => {
        addToFavorite(id);
    };

    return (
        <div>
            <div className="bg-[#9538E2] pt-8 h-[300px] text-center space-y-4 pb-40">
                <h1 className="text-3xl font-bold text-white font-sora">
                    Product Details
                </h1>
                <p className="text-white font-sora">
                    Explore the latest gadgets that will take your experience to
                    the next level. From smart devices to <br /> the coolest
                    accessories, we have it all!
                </p>
            </div>
            <div className="relative flex flex-col justify-center w-[90%] max-w-5xl p-4 mx-auto bg-white border shadow-lg md:flex-row rounded-xl -top-32 lg:w-3/5 lg:p-8">
                {/* Image Section */}
                <div className="flex justify-center w-full p-4 md:w-1/2">
                    <img
                        className="object-cover w-full h-auto rounded-lg max-h-[300px]"
                        src={image}
                        alt={name}
                    />
                </div>

                {/* Details Section */}
                <div className="w-full p-4 space-y-4 md:w-1/2">
                    <h1 className="text-2xl font-semibold font-sora">{name}</h1>
                    <p className="font-sora font-bold text-lg text-[#09080FCC]">
                        Price: ${price}
                    </p>

                    {availability && (
                        <p className="inline-block px-3 py-1 text-xs font-semibold text-green-700 bg-green-100 rounded-full">
                            In Stock
                        </p>
                    )}

                    <p className="text-gray-600 font-sora">{description}</p>

                    {/* Specification Section */}
                    <div className="space-y-2">
                        <p className="font-semibold">Specification:</p>
                        <ul className="space-y-1 text-sm text-gray-700 list-decimal list-inside">
                            {specification.length > 0 ? (
                                specification.map((spec, index) => (
                                    <li key={index}>{spec}</li>
                                ))
                            ) : (
                                <li>No specifications available</li>
                            )}
                        </ul>
                    </div>

                    {/* Rating Section */}
                    <div className="flex items-center space-x-2">
                        <p className="font-semibold">Rating:</p>
                        <div className="flex items-center">
                            <span className="text-yellow-400">★★★★☆</span>
                            <span className="ml-2 text-sm text-gray-600">
                                {rating}
                            </span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 mt-4">
                        <button
                            onClick={() => handleAddToCart(id)}
                            className="flex items-center gap-2 px-4 py-2 font-bold text-white rounded-full bg-[#9538E2] hover:bg-white hover:text-[#9538E2] border transition-all duration-200 ease-in-out"
                        >
                            Add to Cart <BsCart3 />
                        </button>
                        <button
                            onClick={() => handleAddToFavorite(id)}
                            className="p-3 border rounded-full hover:bg-gray-200"
                        >
                            <FiHeart />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
