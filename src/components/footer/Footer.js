import React from "react";
import { MapPin, Phone, Mail, Instagram } from "lucide-react";
import { Twitter } from "lucide-react";
import styles from "./Footer.module.css";
import { FacebookIcon, XIcon } from "../../utils/Icons";

const Footer = () => {
    return (
        <footer className={styles.footerBackground}>
            <div className={styles.footerContainer}>
                <div className={styles.footerLogo}>
                    <img
                        src="/logo-footer-little-lemon.png"
                        alt="Little Lemon"
                    />
                </div>

                <div className={styles.footerColumn}>
                    <h3>Contact Us</h3>
                    <ul>
                        <li>
                            <MapPin size={20} color="var(--primary-green)" />
                            <span>813 S Western Ave, Chicago, IL 60612</span>
                        </li>
                        <li>
                            <Phone size={20} color="var(--primary-green)" />
                            <span>+1 (775) 863-7196</span>
                        </li>
                        <li>
                            <Mail size={20} color="var(--primary-green)" />
                            <span>littlelemon@gmail.com</span>
                        </li>
                    </ul>
                </div>

                <div className={styles.footerColumn}>
                    <h3>Find Us On</h3>
                    <ul>
                        <li>
                            <FacebookIcon size={20} />
                            <a href="https://facebook.com">Facebook</a>
                        </li>
                        <li>
                            <XIcon size={20} />
                            <a href="https://x.com">Twitter / X</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
