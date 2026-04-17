import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./App.css";
import Nav from "./components/header/Nav";
import Main from "./Main";
import ConfirmedBooking from "./pages/ConfirmedBooking";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    return (
        <div className="container">
            <header className="header" aria-label="Main website header">
                <Header />
            </header>

            <main className="main" role="main">
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/booking" element={<Main />} />
                    <Route path="/confirmed" element={<ConfirmedBooking />} />
                </Routes>
            </main>

            <footer className="footer" aria-label="Website footer">
                <Footer />
            </footer>
        </div>
    );
}

export default App;
