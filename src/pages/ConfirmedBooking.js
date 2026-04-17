import React from "react";
import { CheckCircle } from "lucide-react"; // Cần cài đặt lucide-react
import { useNavigate } from "react-router-dom";
import styles from "./ConfirmedBooking.module.css";

function ConfirmedBooking() {
    const navigate = useNavigate();

    return (
        <main className={styles.confirmedContainer}>
            <section className={styles.hero}>
                <div className={styles.content}>
                    <CheckCircle size={80} color="#F4CE14" strokeWidth={1.5} />
                    <h1>Booking Confirmed!</h1>
                    <p>
                        A confirmation email has been sent to your address. We
                        look forward to seeing you at Little Lemon Chicago!
                    </p>
                </div>
            </section>

            <section className={styles.actionSection}>
                <button
                    className={styles.homeBtn}
                    onClick={() => navigate("/")}
                    aria-label="Go to homepage"
                >
                    Return to Home
                </button>
            </section>
        </main>
    );
}

export default ConfirmedBooking;
