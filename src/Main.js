import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingPage from "./pages/BookingPage";
import { fetchAPI, submitAPI } from "./utils/api";

export function updateTimes(state, action) {
    return fetchAPI(action);
}

export function initializeTimes() {
    return fetchAPI(new Date());
}

const Main = () => {
    const [availableTimes, dispatch] = useReducer(
        updateTimes,
        [],
        initializeTimes,
    );

    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    };

    return (
        <BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}
        />
    );
};

export default Main;
