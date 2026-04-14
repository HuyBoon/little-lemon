import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setDate(e.target.value);
        dispatch(selectedDate);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            date,
            time,
            guests,
            occasion,
        };

        submitForm(formData);
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        >
            <label htmlFor="res-date">Choose date</label>
            <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
            />

            <label htmlFor="res-time">Choose time</label>
            <select
                id="res-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
            >
                {availableTimes.map((t) => (
                    <option key={t}>{t}</option>
                ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
            />

            <label htmlFor="occasion">Occasion</label>
            <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
            >
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>

            <button type="submit">Submit</button>
        </form>
    );
}

export default BookingForm;
