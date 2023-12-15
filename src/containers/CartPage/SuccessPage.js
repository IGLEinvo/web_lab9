import React from "react";
import Layout from "../App/Layout/Layout";
import Footer from "../App/Footer/Footer";
import successImage from "../../Images/GALOCHKA_CHINA.jpg";

const SuccessPage = () => {
    return (
        <div>
            <Layout />
            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <img src={successImage} alt="Success" style={{ width: "150px", height: "150px" }} />
                <h2>Success!</h2>
                <p>Your order was sent to processing!</p>
                <p style={{ marginTop: "10px" }}>Check your email box for further information.</p>
            </div>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
                <button
                    className="btn"
                    style={{ backgroundColor: "black", borderColor: "black", color: "white" }}
                    onClick={() => window.location.replace("/catalog")}
                >
                    Go back to Catalog
                </button>
            </div>
            <Footer />
        </div>
    );
};

export default SuccessPage;