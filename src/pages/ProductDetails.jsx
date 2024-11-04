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
        setProduct(singleProduct);
    }, [data, id]);

    const {
        name,
        image,
        description,
        price,
        specification,
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
            <div className="absolute lg:right-[285px] flex flex-col md:flex-row justify-center w-3/5 mx-auto bg-white border top-60 rounded-xl">
                <div className="w-1/2">
                    <img
                        className="md:w-4/5 rounded-xl"
                        src={image}
                        alt={name}
                    />
                </div>
                <div className="w-1/2">
                    <h1 className="text-2xl font-semibold font-sora">{name}</h1>
                    <p className="font-sora font-bold text-xl text-[#09080FCC]">
                        Price: ${price}
                    </p>
                    <p>Availability: {availability}</p>
                    <p>{description}</p>
                    <p>Specification: {specification}</p>
                    <p>Rating: {rating}</p>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => handleAddToCart(id)}
                            className="flex items-center gap-2 px-4 py-2 text-lg font-bold border rounded-full font-sora bg-[#9538E2] text-white hover:bg-white hover:text-[#9538E2] transition-all duration-200 ease-in-out"
                        >
                            Add to Cart
                            <BsCart3 />
                        </button>
                        <button
                            onClick={() => handleAddToFavorite(id)}
                            className="p-3 border rounded-full"
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
