import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Nav from "./components/Nav";
import Main from "./Main";
import ConfirmedBooking from "./pages/ConfirmedBooking";

function App() {
    return (
        <>
            <header>
                <Nav />
            </header>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/booking" element={<Main />} />
                <Route path="/confirmed" element={<ConfirmedBooking />} />
            </Routes>
        </>
    );
}

export default App;
