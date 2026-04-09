import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import Nav from "./components/Nav";

function App() {
    return (
        <>
            <Nav />

            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<BookingPage />} />
            </Routes>
        </>
    );
}

export default App;
