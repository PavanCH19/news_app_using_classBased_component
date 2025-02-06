import { Component } from "react";
import { Link } from "react-router-dom";
import "../component_css/nav_bar.css";
//import { FaMoon, FaSun } from "react-icons/fa";

class Nav extends Component {
    constructor() {
        super();
        this.state = {
            menuOpen: false,
        };
    }

    render() {

        return (
            <>
                <header className="header">
                    <Link to="#" className="logo"> <i>Flying-News</i> </Link>
                    <button className="menu-toggle" onClick={() => { this.setState({ menuOpen: !this.state.menuOpen }); }}> ☰ </button>
                    <nav className={`nav ${this.state.menuOpen ? "active" : ""}`}>
                        <Link to="/"> Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/general">general</Link>
                        <Link to="/business">business</Link>
                        <Link to="/entertainment">entertainment</Link>
                        <Link to="/health">health</Link>
                        <Link to="/science">science</Link>
                        <Link to="/sports">sports</Link>
                        <Link to="/technology">technology</Link>
                    </nav>
                </header>
            </>
        );
    }
}

export default Nav;