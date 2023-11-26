import React from "react";
import Footer from "../App/Footer/Footer";
import Layout from "../App/Layout/Layout";
import ItemDescription from "./ItemDescription";
import { useLocation } from 'react-router-dom';

export default function ItemPage() {
    const location = useLocation();
    const { state } = location;

    return (
        <div>
            <Layout />
            <ItemDescription product={state} />
            <Footer />
        </div>
    );
}
