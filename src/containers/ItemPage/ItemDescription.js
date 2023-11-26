// ItemDescription.js
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "./ItemDescription.styled";
import { useNavigate } from "react-router-dom";

export default function ItemDescription({ product }) {
    const navigate = useNavigate();
    const { mark, carat, description, imageSrc, price } = product;

    const goBack = () => {
        navigate("/catalog");
    }

    return (
        <div style={styles.container} className="container">
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={imageSrc}
                        style={styles.img}
                        alt="Product Image"
                        className="img-fluid"
                    />
                    <div style={styles.priceAndButtons}>
                        <h2>Price: ${price}</h2>
                        <button style={styles.button1} className="btn btn-primary" onClick={goBack}>Go back</button>
                        <button style={styles.button2} className="btn btn-success">Add to Cart</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <h2 style={styles.textHeader}>{mark}</h2>
                    <p style={styles.text}>
                        Вибравши {mark} який має {carat} карат це було одним з кращих рішень за сьогодні 
                        <br></br>
                        Опис:
                        <br></br> 
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
