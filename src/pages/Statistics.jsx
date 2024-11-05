import React from "react";
import { useLoaderData } from "react-router-dom";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const Statistics = () => {
    const productData = useLoaderData();

    const chartData = productData.map((product) => ({
        name: product.name,
        price: product.price,
    }));

    return (
        <div style={{ padding: "20px", backgroundColor: "#f4f4f8" }}>
            <div className="flex flex-col items-center bg-[#9538E2] text-white py-6 space-y-4">
                <h1 className="text-2xl font-bold">Price Statistics</h1>
                <p className="text-center">
                    Explore the price distribution of our gadgets to find
                    options within your budget!
                </p>
            </div>

            <div
                style={{
                    backgroundColor: "#ffffff",
                    padding: "20px",
                    borderRadius: "8px",
                    marginTop: "20px",
                }}
            >
                <h2 className="mb-4 text-lg font-bold">Product Price Chart</h2>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={chartData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="#9b5de5" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
