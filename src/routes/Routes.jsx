import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Layout from "../layouts/Layout";
import ProductCards from "../components/ProductCards";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <Home />,
                loader: () => fetch("../categories.json"),
                children: [
                    {
                        path: "/",
                        element: <ProductCards />,
                        loader: () => fetch("../products.json"),
                    },
                    {
                        path: "/category/:category",
                        element: <ProductCards />,
                        loader: () => fetch("../products.json"),
                    },
                ],
            },
            {
                path: "statistics",
                element: <Statistics />,
            },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
        ],
    },
]);

export default routes;
