import React from "react";
import Layout from "../App/Layout/Layout";
import Footer from "../App/Footer/Footer";
import ShoppingCart from './ShopingCart';

export default function CardPage() {
    return (
        <div>
            <Layout/>
            <ShoppingCart/>
            <Footer/>
        </div>
    );
}