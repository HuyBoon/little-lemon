import React from "react";
import { HashLink } from "react-router-hash-link";
import styles from "./Header.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav} aria-label="Main Navigation">
            <ul className={styles.navLinks}>
                <li>
                    <HashLink smooth to="/#about">
                        About Us
                    </HashLink>
                </li>
                <li>
                    <HashLink to="/booking">Reservations</HashLink>
                </li>
                <li>
                    <HashLink to="/">Home Order</HashLink>
                </li>
                <li className={styles.loginContainer}>
                    <HashLink to="/login" className={styles.loginBtn}>
                        Login
                    </HashLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
