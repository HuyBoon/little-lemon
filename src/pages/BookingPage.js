import BookingForm from "../components/booking/BookingForm";
import styles from "./BookingPage.module.css";

function BookingPage({ availableTimes, dispatch, submitForm }) {
    return (
        <main>
            <section className={styles.bookingHero}>
                <div className={styles.container}>
                    <h1>Make A Reservation</h1>
                    <p>
                        Please fill in the form below to make a reservation at
                        the Little Lemon Chicago restaurant
                    </p>
                </div>
            </section>

            <section className={styles.formSection}>
                <BookingForm
                    availableTimes={availableTimes}
                    dispatch={dispatch}
                    submitForm={submitForm}
                />
            </section>
        </main>
    );
}
export default BookingPage;
