import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CallToAction.module.css";

const CallToAction = () => {
    const navigate = useNavigate();

    return (
        <section className={styles.heroBackground}>
            <div className={styles.heroContainer}>
                <div className={styles.heroContent}>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are a family owned Mediterranean restaurant, focused
                        on traditional recipes served with a modern twist.
                    </p>
                    <button
                        className="btn-primary"
                        onClick={() => navigate("/booking")}
                        aria-label="On click reserve a table"
                    >
                        Reserve A Table
                    </button>
                </div>
                <div className={styles.heroImage}>
                    <img
                        src="/hero-food.jpg"
                        alt="Chef holding a tray of food"
                    />
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
