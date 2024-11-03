import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

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
                    <div>
                        <button>Add to Cart</button>
                        <button>Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
