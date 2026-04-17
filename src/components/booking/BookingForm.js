import { useState } from "react";
import styles from "./BookingForm.module.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
    // Thông tin khách hàng
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    // Chi tiết đặt bàn
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");
    const [specialRequests, setSpecialRequests] = useState("");

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setDate(e.target.value);
        dispatch(selectedDate);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm({
            name,
            email,
            phone,
            date,
            time,
            guests,
            occasion,
            specialRequests,
        });
    };

    // Validation cơ bản
    const isFormValid = name && email && phone && date && time && guests >= 1;

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            {/* Customer Information Section */}
            <h2 className={styles.sectionTitle}>Customer Infomation</h2>
            <div className={styles.fieldGroup}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    placeholder="e.g. Stephen King"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    placeholder="e.g. stephenking@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                    type="tel"
                    id="phone"
                    placeholder="e.g. +1 234 567 890"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </div>

            {/* Reservation Details Section */}
            <h2 className={styles.sectionTitle}>Reservation Details</h2>
            <div className={styles.gridFields}>
                <div className={styles.field}>
                    <label htmlFor="res-date">Select a date</label>
                    <input
                        type="date"
                        id="res-date"
                        value={date}
                        onChange={handleDateChange}
                        required
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="res-time">Select a time</label>
                    <select
                        id="res-time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    >
                        <option value="">Select a time</option>
                        {availableTimes.map((t) => (
                            <option key={t} value={t}>
                                {t}
                            </option>
                        ))}
                    </select>
                </div>

                <div className={styles.field}>
                    <label htmlFor="guests">Guests number</label>
                    <input
                        type="number"
                        id="guests"
                        placeholder="Number of guests"
                        value={guests}
                        min="1"
                        max="10"
                        onChange={(e) => setGuests(Number(e.target.value))}
                        required
                    />
                </div>
            </div>

            <div className={styles.fieldGroup}>
                <label htmlFor="occasion">Occasion</label>
                <input
                    type="text"
                    id="occasion"
                    placeholder="Purpose of the reservation"
                    value={occasion}
                    onChange={(e) => setOccasion(e.target.value)}
                />

                <label htmlFor="special-requests">Special Requests</label>
                <textarea
                    id="special-requests"
                    placeholder="Special requests for the reservation"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    rows="2"
                />
            </div>

            <button
                type="submit"
                disabled={!isFormValid}
                className={styles.submitBtn}
                aria-label="Confirm Reservation"
            >
                Confirm Reservation &rarr;
            </button>
        </form>
    );
}

export default BookingForm;
