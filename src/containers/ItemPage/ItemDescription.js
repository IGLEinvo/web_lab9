import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import styles from "./ItemDescription.styled";
import {
    useNavigate, useParams,
} from "react-router-dom";
import { getStone } from "../../API/api";
import { useDispatch } from "react-redux";
import { addToCart } from '../Redux/reduces/stoneSlice';

export default function ItemDescription() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [stone, setStone] = useState(null);
    const [selectedQuantity, setSelectedQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchStone= async () => {
            try {
                const response = await getStone(id);
                setStone(response.data);
            } catch (error) {
                console.error("Помилка завантаження даних про коштовні камені:", error);
            }
        };

        fetchStone();
    }, [id]);

    const handleQuantityChange = (e) => {
        const quantity = parseInt(e.target.value, 10);
        setSelectedQuantity(quantity);
    };

    const handleAddToCart = () => {
        if (selectedQuantity > 0) {
            const stoneWithQuantity = { ...stone, stoneQuantity: selectedQuantity };
            dispatch(addToCart(stoneWithQuantity));
        } else {
            alert("Кількість має бути більше нуля для додавання до кошика.");
        }
    };

    const goBack = () => {
        navigate("/catalog");
    };

    if (!stone) {
        return <div className="loader">loading...</div>;
    }

    return (
        <div style={styles.container} className="container">
            <div className="row">
                <div className="col-md-6">
                    <img 
                        src={stone.imageSrc}
                        style={styles.img}
                        alt="Зображення"
                        className="img-fluid"
                    />
                </div>
                <div className="col-md-6">
                    <h2 style={styles.textHeader}>{stone.mark}</h2>
                    <p style={styles.text}>
                    Вибравши {stone.mark} який має {stone.carat} карат це було одним з кращих рішень за сьогодні 
                        <br></br>
                        Опис:
                        <br></br> 
                        {stone.description}
                    </p>
                    <div style={styles.fields}>
                        <p>Countable field</p>
                        <div className="search-box" style={{ marginLeft: '10px'}}>
                            <input
                                id="search"
                                type="number"
                                placeholder="1234..."
                                style={{ borderRadius: '10px', width: '80px' }}
                                value={selectedQuantity}
                                onChange={handleQuantityChange}
                            />
                        </div>
                    </div>
                    <div style={styles.priceAndButtons}>
                        <h2>Price: ${stone.price}</h2>
                        <button style={styles.button1} className="btn btn-primary" onClick={goBack}>Go back</button>
                        <button style={styles.button2} className="btn btn-success" onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
