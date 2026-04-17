import React from "react";
import Nav from "./Nav";
import styles from "./Header.module.css";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <HashLink smooth to="/#top" className={styles.logo}>
                    <img src="/logo-little-lemon.svg" alt="Little Lemon Logo" />
                </HashLink>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
