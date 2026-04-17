import React from "react";
import styles from "./Chicago.module.css";

const Chicago = () => {
    return (
        <section className={styles.aboutContainer}>
            <div className={styles.aboutText}>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <div className={styles.opening}>
                    <h3>Opening hours:</h3>
                    <p>Weekdays: 9.30am - 9.30pm</p>
                    <p>Weekends: 9am - 8.30pm</p>
                </div>
                <p className={styles.desc}>
                    Our menu is inspired by the flavors of the Mediterranean,
                    with a focus on healthy and wholesome ingredients. Whether
                    you're in the mood for a hearty meal or a light snack, we've
                    got something for everyone at Little Lemon.
                </p>
            </div>
            <div className={styles.aboutImages}>
                <img
                    className={styles.imgTop}
                    src="/mario-adrian-a.jpg"
                    alt="Chefs Mario and Adrian"
                />
                <img
                    className={styles.imgBottom}
                    src="/mario-adrian-b.jpg"
                    alt="Chefs in kitchen"
                />
            </div>
        </section>
    );
};

export default Chicago;
