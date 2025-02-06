import Nav from "./components/nav";
import TextForm from "./components/textForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react";

function Textutils() {
    const [mode, setMode] = useState('light');
    const [title, setTitle] = useState("Textutils - light Mode");
    const [style, setStyle] = useState({
        color: "black",
        backgroundColor: "white",
        transition: "backgroundColor 0.3s ease, color 0.3s ease"
    });

    document.title = title;

    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "rgb(1, 4, 58)";
            setTitle("Textutils - Dark Mode");
            setStyle({
                color: "white",
                backgroundColor: "rgb(1, 4, 58)",
                transition: "backgroundColor 0.3s ease, color 0.3s ease"
            })
        } else {
            setMode('light');
            document.body.style.backgroundColor = "white";
            setTitle("Textutils - light Mode");
            setStyle({
                color: "black",
                backgroundColor: "white",
                transition: "backgroundColor 0.3s ease, color 0.3s ease"
            })
        }
    }

    return (
        <>
            <Router>
                <Nav title="Textutils" about="about txtutils" toggleMode={toggleMode} mode={style} />
                <Routes>
                    <Route path="/" element={<TextForm mode={style} />} />
                    <Route path="/about" elemet={<about />} />
                </Routes>
            </Router>
        </>
    );
}

export default Textutils;   