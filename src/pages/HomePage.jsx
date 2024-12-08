import { useState, useEffect } from "react";
import { FaAffiliatetheme, FaAlgolia, FaAmazon, FaFacebook, FaGoogle, FaInstagram, FaMicrosoft, FaTwitter, FaAirbnb } from "react-icons/fa6";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import LatestVisas from "../components/LatestVisas";

const HomePage = () => {
    const [theme, setTheme] = useState("light");

    // Toggle between light and dark themes
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme); // Save the theme to localStorage
    };

    useEffect(() => {
        // Load the saved theme from localStorage (if available)
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
    }, []);

    useEffect(() => {
        // Apply the theme by setting the `data-theme` attribute on the HTML document's root
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <div>
            <header className="flex justify-between items-center px-6 py-4 bg-base-100">
                <Banner toggleTheme={toggleTheme} />
                
            </header>
            <main className="min-h-[calc(100vh-1039px)]">
                {/* Latest visas section */}
                <section className="bg-[#EDF5FF] py-10">
                    
                    <LatestVisas />
                </section>
                <section className="bg-[#EDF5FF] py-10">
                    <div className="bg-white text-primary-color py-16">
                        {/* Visa Highlights Section */}
                        <div className="text-center text-black mb-16">
                            <h2 className="text-4xl font-bold">Visa Highlights</h2>
                            <p className="text-lg mt-4">
                                Discover why our visa services stand out. Here are some of our key features.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
                            {/* Fast Processing */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center text-white">
                                <div className="text-5xl mb-4">
                                    <i className="bi bi-clock"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
                                <p>Get your visa processed within 48 hours for selected countries.</p>
                            </div>

                            {/* Affordable Fees */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center text-white">
                                <div className="text-5xl mb-4">
                                    <i className="bi bi-cash"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Affordable Fees</h3>
                                <p>We offer competitive pricing with no hidden costs.</p>
                            </div>

                            {/* Global Coverage */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center text-white">
                                <div className="text-5xl mb-4">
                                    <i className="bi bi-globe"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
                                <p>Apply for visas to over 100+ countries from one platform.</p>
                            </div>

                            {/* 24/7 Support */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center text-white">
                                <div className="text-5xl mb-4">
                                    <i className="bi bi-headset"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                                <p>
                                    Our customer support team is available around the clock to assist
                                    you.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Trusted by Leading Companies */}
                <section className="bg-[#EDF5FF] py-10">
                    <div className="text-center text-primary-color max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-black">Trusted by Leading Companies</h2>
                        <div className="flex flex-wrap justify-center items-center gap-8 mt-8 text-5xl">
                            <FaFacebook />
                            <FaInstagram />
                            <FaTwitter />
                            <FaAmazon />
                            <FaGoogle />
                            <FaMicrosoft />
                            <FaAirbnb />
                            <FaAffiliatetheme />
                            <FaAlgolia />
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomePage;
