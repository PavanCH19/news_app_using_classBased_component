import { Component } from "react";
import "../component_css/footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer">
                    <div className="footer-content">
                        <div className="footer-section about">
                            <h1 className="logo-text">News</h1>
                            <p>
                                News is a blog website where you can read news and articles about various topics.
                            </p>
                            <div className="contact">
                                <span><i className="fas fa-phone"></i> &nbsp; 123-456-789</span>
                                <span><i className="fas fa-envelope"></i> &nbsp; 123-456-789</span>
                            </div>
                            <div className="socials">
                                <a href="#"><i className="fab fa-facebook"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="#"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="footer-section links">
                            <h2>Quick Links</h2>
                            <br />
                            <ul>
                                <Link to="/"><li>Home</li></Link>
                                <Link to="/about"><li>About</li></Link>
                            </ul>

                        </div>
                        <div className="footer-section contact-form">
                            <h2>Contact Us</h2>
                            <br />
                            <form>
                                <input type="email" name="email" className="text-input contact-input" placeholder="Your email address..." />
                                <textarea name="message" className="text-input contact-input" placeholder="Your message..."></textarea>
                                <button type="submit" className="btn btn-big">
                                    <i className="fas fa-envelope"></i>
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        &copy; news.com | Designed by me
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;