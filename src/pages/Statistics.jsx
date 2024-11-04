import React from "react";
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

const data = [
    { date: "Dec 25, 23", price: 50, total: 80, rating: 70 },
    { date: "Dec 27, 23", price: 60, total: 70, rating: 80 },
    { date: "Dec 29, 23", price: 40, total: 60, rating: 50 },
    { date: "Jan 3, 24", price: 90, total: 100, rating: 95 },
    { date: "Jan 5, 24", price: 70, total: 85, rating: 80 },
    { date: "Jan 7, 24", price: 80, total: 90, rating: 85 },
    { date: "Jan 9, 24", price: 60, total: 80, rating: 75 },
];

const StatisticsChart = () => {
    return (
        <div style={{ padding: "20px", backgroundColor: "#f4f4f8" }}>
            <div className="flex flex-col items-center bg-[#9538E2] text-white py-6 space-y-4">
                <h1 className="text-2xl font-bold">Statistics</h1>
                <p className="text-center">
                    Explore the latest gadgets that will take your experience to
                    the next level. From smart devices to the coolest
                    accessories, we have it all!
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
                <h2 className="mb-4 text-lg font-bold">Statistics</h2>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="#9b5de5" />
                        <Bar dataKey="total" fill="#d45087" />
                        <Bar dataKey="rating" fill="#ff6361" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StatisticsChart;
