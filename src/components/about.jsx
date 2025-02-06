
const AboutUs = () => {
    return (
        <div className="container my-5">
            {/* About Us Section with Gradient Background */}
            <div className="text-center py-5 px-3 rounded shadow-lg" style={{
                background: "linear-gradient(135deg, #007bff, #6610f2)",
                color: "#fff"
            }}>
                <h2 className="fw-bold">About Us</h2>
                <p className="lead">
                    Welcome to <strong> News-Monkey </strong>, your go-to source for the latest news, insights, and updates from around the world.
                </p>
                <p>
                    Our mission is to deliver accurate, fast, and reliable news, keeping you informed about everything that matters.
                </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="mt-5 text-center">
                <h4 className="fw-bold">Why Choose Us?</h4>
                <div className="row text-center mt-4">
                    {[
                        {
                            title: "✅ Real-Time Updates",
                            desc: "Stay ahead with breaking news and live reports.",
                        },
                        {
                            title: "✅ Diverse Categories",
                            desc: "From politics and business to technology, sports, and entertainment, we cover it all.",
                        },
                        {
                            title: "✅ Personalized Experience",
                            desc: "Customize your feed based on your interests.",
                        },
                        {
                            title: "✅ Trusted Sources",
                            desc: "We bring you news from verified and credible sources.",
                        },
                        {
                            title: "✅ User-Friendly Interface",
                            desc: "A seamless and engaging reading experience.",
                        },
                    ].map((item, index) => (
                        <div className="col-md-6 col-lg-4 mb-4" key={index}>
                            <div
                                className="card shadow border-0 h-100 p-3"
                                style={{
                                    transition: "transform 0.3s ease-in-out",
                                    cursor: "pointer",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            >
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Closing Message */}
            <div className="text-center mt-5 p-4 rounded shadow-lg" style={{
                backgroundColor: "#f8f9fa",
                borderLeft: "5px solid #007bff"
            }}>
                <p className="fw-bold">
                    At <strong> News-Monkey </strong>, we believe that staying informed should be simple, accessible, and unbiased.
                    Whether you are looking for global headlines or local stories, we have got you covered.
                </p>
                <p className="fs-5 text-primary">📢 <strong>Stay updated. Stay informed.</strong></p>
                <p>
                    Got feedback? We are love to hear from you! Contact us at <a href="mailto:[newsmonkey@gmail.com]" className="fw-bold text-decoration-none">[newsmonkey@gmail.com]</a>.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
