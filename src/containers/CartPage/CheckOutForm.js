import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    firstName: Yup.string().matches(/^[A-Za-z]+$/, 'Only letters are allowed').required("First name is required"),
    lastName: Yup.string().matches(/^[A-Za-z]+$/, 'Only letters are allowed').required("Last name is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
    phone: Yup.string().matches(/^\d{10}$/, "Invalid phone number").required("Phone is required"),
    address: Yup.string().required("Address is required"),
});

const CheckoutForm = ({ onSubmit, onGoBack }) => {
    const inputStyle = {
        borderRadius: "10px",
        padding: "8px",
        height: "30px",
        border: "1px solid #000",
        backgroundColor: "#fff",
        color: "#000",
    };

    const errorMessageStyle = {
        color: "#ff0000",
        marginTop: "5px",
    };

    return (
        <Formik
            initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {({ dirty, isValid }) => (
                <Form style={{ textAlign: "center", marginBottom: "40px", color: "#000", backgroundColor: "#fff" }}>
                    <h1 style={{ marginBottom: "20px", fontSize: "28px", fontWeight: "bold", marginTop: "60px" }}>Checkout</h1>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{ display: "flex", marginBottom: "10px", justifyContent: "center" }}>
                            <div style={{ marginRight: "20px", textAlign: "left" }}>
                                <label htmlFor="firstName">First Name:</label>
                                <Field type="text" id="firstName" name="firstName" style={inputStyle} />
                                <ErrorMessage name="firstName" component="div" style={errorMessageStyle} />
                            </div>
                            <div style={{ textAlign: "left" }}>
                                <label htmlFor="lastName">Last Name:</label>
                                <Field type="text" id="lastName" name="lastName" style={inputStyle} />
                                <ErrorMessage name="lastName" component="div" style={errorMessageStyle} />
                            </div>
                        </div>
                        <div style={{ display: "flex", marginBottom: "10px", justifyContent: "center" }}>
                            <div style={{ marginRight: "20px", textAlign: "left" }}>
                                <label htmlFor="email">Email:</label>
                                <Field type="email" id="email" name="email" style={inputStyle} />
                                <ErrorMessage name="email" component="div" style={errorMessageStyle} />
                            </div>
                            <div style={{ textAlign: "left" }}>
                                <label htmlFor="phone">Phone:</label>
                                <Field type="text" id="phone" name="phone" style={inputStyle} />
                                <ErrorMessage name="phone" component="div" style={errorMessageStyle} />
                            </div>
                        </div>
                        <div style={{ marginBottom: "10px", textAlign: "left" }}>
                            <label htmlFor="address">Address:</label>
                            <Field type="text" id="address" name="address" style={inputStyle} />
                            <ErrorMessage name="address" component="div" style={errorMessageStyle} />
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                        <button type="button" className="btn" onClick={onGoBack} style={{ backgroundColor: "#000", color: "#fff" }}>
                            Go Back
                        </button>
                        <button type="submit" className="btn" disabled={!dirty || !isValid} style={{ backgroundColor: "#000", color: "#fff" }}>
                            Continue
                        </button>
                    </div>
                    <div style={{ marginTop: "40px" }}>
                        <p>&copy; 2023 Your Company</p>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default CheckoutForm;
