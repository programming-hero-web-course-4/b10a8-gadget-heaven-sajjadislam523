import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { addToCart, addToFavorite, getFavoriteData } from "../utils/Index";
import Rating from "react-rating";

const ProductDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const [product, setProduct] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        const singleProduct = data.find((product) => product.id === id);
        setProduct(singleProduct || {});

        const favoriteData = getFavoriteData();
        if (favoriteData.includes(id)) {
            setIsDisabled(true);
        }
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
        setIsDisabled(true);
        addToFavorite(id);
    };

    return (
        <div>
            <div className="bg-[#9538E2] pt-8 h-[300px] text-center space-y-4 pb-40">
                <h1 className="text-3xl font-bold text-white font-sora">
                    Product Details
                </h1>
                <p className="text-sm text-white md:text-base font-sora">
                    Explore the latest gadgets that will take your experience to
                    the next level. From smart devices to <br /> the coolest
                    accessories, we have it all!
                </p>
            </div>
            <div className="relative flex flex-col justify-center w-[90%] max-w-5xl p-4 mx-auto bg-white border shadow-lg md:flex-row rounded-xl -top-28 lg:w-3/5 lg:p-8">
                <div className="flex justify-center w-full p-4 md:w-1/2">
                    <img
                        className="object-cover w-full h-auto rounded-lg max-h-[300px]"
                        src={image}
                        alt={name}
                    />
                </div>

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

                    <div className="flex items-center space-x-2">
                        <p className="font-semibold">Rating:</p>
                        <Rating
                            initialRating={rating}
                            readonly
                            emptySymbol={<FaStar className="text-gray-300" />}
                            fullSymbol={<FaStar className="text-yellow-400" />}
                        />
                        <span className="px-2 ml-2 text-sm text-gray-600 bg-gray-200 rounded-full">
                            {rating}
                        </span>
                    </div>

                    <div className="flex items-center gap-4 mt-4">
                        <button
                            onClick={() => handleAddToCart(id)}
                            className="flex items-center gap-2 px-4 py-2 font-bold text-white rounded-full bg-[#9538E2] hover:bg-white hover:text-[#9538E2] border transition-all duration-200 ease-in-out"
                        >
                            Add to Cart <BsCart3 />
                        </button>
                        <button
                            disabled={isDisabled}
                            onClick={() => handleAddToFavorite(id)}
                            className={`p-3 border rounded-full  ${
                                isDisabled ? "bg-gray-300" : "hover:bg-gray-200"
                            }`}
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
