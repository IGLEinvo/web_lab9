import React from "react";
import styles from "./Footer.styled";
import StoneLogo from "../../../Images/logo.png";
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined, GoogleOutlined } from "@ant-design/icons";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h2>Детальна інформація</h2>
                        <p>А за детальною інформацією ви можете звернутися за такими посиланнями:</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <img style={styles.logo} src={StoneLogo} alt="Логотип" />
                    </div>
                    <div style={styles.verticalAlignCenter} className="col-md-4">
                        <div className="d-flex justify-content-between">
                            <a href="https://www.facebook.com">
                                <FacebookOutlined style={{ color: 'blue' }} />
                            </a>
                            <a href="https://www.twitter.com">
                                <TwitterOutlined style={{ color: 'cerulean' }} />
                            </a>
                            <a href="https://www.linkedin.com">
                                <LinkedinOutlined style={{ color: 'cerulean' }} />
                            </a>
                            <a href="https://www.google.com">
                                <GoogleOutlined style={{ color: 'orange' }} />
                            </a>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="text-center">
                    2023 IoT © Copyright all rights reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
