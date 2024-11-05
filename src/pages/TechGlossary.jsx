import React, { useState } from "react";

const glossaryData = [
    {
        category: "Display & Screen Technology",
        terms: [
            {
                term: "OLED (Organic Light-Emitting Diode)",
                definition:
                    "A display technology that offers better contrast and colors compared to LCDs. Known for deep blacks and vibrant visuals.",
            },
            {
                term: "Refresh Rate",
                definition:
                    "The number of times a display updates per second, measured in Hertz (Hz). A higher refresh rate, like 120Hz, makes animations and scrolling smoother.",
            },
            {
                term: "Resolution",
                definition:
                    "The number of pixels on the screen, often represented as width x height (e.g., 1920x1080). Higher resolutions offer sharper images.",
            },
        ],
    },
    {
        category: "Performance & Memory",
        terms: [
            {
                term: "RAM (Random Access Memory)",
                definition:
                    "Short-term memory in a device that allows for multitasking and smooth performance. Higher RAM generally means better multitasking.",
            },
            {
                term: "Processor (CPU)",
                definition:
                    "The “brain” of the device that performs calculations and tasks. Processors with multiple cores (e.g., quad-core) can handle more tasks simultaneously.",
            },
            {
                term: "GPU (Graphics Processing Unit)",
                definition:
                    "A specialized processor for handling graphics, important for gaming and media-intensive applications.",
            },
        ],
    },
    {
        category: "Battery & Charging",
        terms: [
            {
                term: "Battery Life",
                definition:
                    "The amount of time a device can run on a full charge. Measured in hours, often depending on usage.",
            },
            {
                term: "Fast Charging",
                definition:
                    "A feature allowing devices to charge faster than traditional methods. Requires compatible chargers and cables.",
            },
            {
                term: "mAh (Milliampere Hour)",
                definition:
                    "A unit measuring battery capacity. Higher mAh generally indicates longer battery life.",
            },
        ],
    },
    {
        category: "Connectivity",
        terms: [
            {
                term: "5G",
                definition:
                    "The fifth generation of mobile networks, offering faster speeds and more reliable internet connections.",
            },
            {
                term: "Wi-Fi 6",
                definition:
                    "The latest standard in Wi-Fi technology, providing faster speeds and better performance in crowded areas.",
            },
            {
                term: "Bluetooth",
                definition:
                    "A wireless technology for connecting devices over short distances, commonly used for headphones, speakers, and smartwatches.",
            },
        ],
    },
    {
        category: "Software & OS",
        terms: [
            {
                term: "Operating System (OS)",
                definition:
                    "The software that manages a device's hardware and provides a user interface (e.g., Android, iOS).",
            },
            {
                term: "Firmware",
                definition:
                    "Permanent software installed on hardware, often essential for the device’s basic functions.",
            },
        ],
    },
];

const TechGlossary = () => {
    const [activeCategory, setActiveCategory] = useState(null);

    const toggleCategory = (index) => {
        setActiveCategory(activeCategory === index ? null : index);
    };
    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-6 font-sora">
                Tech Glossary
            </h1>
            <p className="text-center text-gray-600 mb-8">
                Welcome to our Tech Glossary! Here, you’ll find
                easy-to-understand explanations for common terms in the tech
                world. Whether you're new to gadgets or a tech enthusiast, this
                glossary will help you navigate the specs and features of the
                latest devices with confidence.
            </p>

            {glossaryData.map((category, index) => (
                <div
                    key={index}
                    className="mb-4 border border-gray-300 rounded-lg shadow-md"
                >
                    <div
                        className="bg-gray-200 p-4 cursor-pointer font-semibold text-lg flex justify-between items-center"
                        onClick={() => toggleCategory(index)}
                    >
                        {category.category}
                        <span>{activeCategory === index ? "▲" : "▼"}</span>
                    </div>
                    {activeCategory === index && (
                        <div className="p-4 bg-white">
                            {category.terms.map((term, termIndex) => (
                                <div key={termIndex} className="mb-4">
                                    <h2 className="text-xl font-medium">
                                        {term.term}
                                    </h2>
                                    <p className="text-gray-700">
                                        {term.definition}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            <div className="text-center mt-8">
                <p className="text-gray-600">
                    Didn't find the term you were looking for? Feel free to
                    reach out to us with suggestions, and we’ll add it to our
                    glossary.
                </p>
            </div>
        </div>
    );
};

export default TechGlossary;
