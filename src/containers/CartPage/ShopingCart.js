import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckoutForm from "./CheckOutForm";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Col,
    Row,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
    incrementQuantity,
    decrementQuantity,
} from "../Redux/reduces/stoneSlice";
import {
    StyledBackToCatalogButton,
    StyledContinueButton,
    StyledIncrementButton,
    StyledDecrementButton,
} from "./ShoppingCart.styled";

const ShoppingCart = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.stone.stoneItems);
    const dispatch = useDispatch();
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);

    const stoneTotalQuantity = cartItems.reduce((total, stone) => {
        return total + stone.price * stone.stoneQuantity;
    }, 0);

    const handleBackToCatalog = () => {
        navigate("/catalog");
    };

    const handleContinue = () => {
        setShowCheckoutForm(true);
    };

    const handleSubmit = (values) => {
        navigate("/success");
    };

    const handleGoBack = () => {
        setShowCheckoutForm(false);
    };

    return (
        <div>
            {showCheckoutForm ? (
                <CheckoutForm onSubmit={handleSubmit} onGoBack={handleGoBack} />
            ) : (
                <Card>
                    <CardHeader style={{ textAlign: "center" }}>
                        <h2 style={{ fontWeight: "bold" }}>Shopping Cart</h2>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            {cartItems.map((stone, index) => (
                                <Col key={index} sm={6} md={4}>
                                    <Card style={{ width: "380px", height: "400px" }}>
                                        <CardBody>
                                            <img
                                                src={stone.imageSrc}
                                                alt={stone.mark}
                                                style={{ width: "350px", height: "180px" }}
                                            />
                                            <h4 style={{ fontWeight: "bold" }}>{stone.mark}</h4>
                                            <p>cart: {stone.carat}</p>
                                            <p>{stone.description}</p>
                                            <p>Quantity: {stone.stoneQuantity}</p>
                                            <div>
                                                <StyledIncrementButton
                                                    onClick={() => dispatch(incrementQuantity(stone.id))}
                                                >
                                                    +
                                                </StyledIncrementButton>
                                                <StyledDecrementButton
                                                    onClick={() => dispatch(decrementQuantity(stone.id))}
                                                >
                                                    -
                                                </StyledDecrementButton>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </CardBody>
                    <CardFooter style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <StyledBackToCatalogButton onClick={handleBackToCatalog} style={{ fontWeight: "bold" }}>
                                Back to Catalog
                            </StyledBackToCatalogButton>
                        </div>
                        <p style={{ fontWeight: "bold" }}>Total amount: {stoneTotalQuantity} $</p>
                        <div>
                            <StyledContinueButton onClick={handleContinue} style={{ fontWeight: "bold" }}>
                                Continue
                            </StyledContinueButton>
                        </div>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
};

export default ShoppingCart;