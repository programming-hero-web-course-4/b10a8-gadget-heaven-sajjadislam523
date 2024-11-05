import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

const ProductCards = () => {
    const products = useLoaderData();
    const { category } = useParams();
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
        if (!category || category === "All Products") {
            setCategoryProducts(products);
        } else {
            const filteredProducts = products.filter(
                (product) => product.category === category
            );
            setCategoryProducts(filteredProducts);
        }
    }, [category, products]);

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
            {categoryProducts.map((product) => (
                <Card key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductCards;
