import Banner from "../components/Banner";
import Footer from "../components/Footer";
import LatestVisas from "../components/LatestVisas";

const HomePage = () => {
    return (
        <div>
            <header>
                <Banner></Banner>
            </header>
            <main className="min-h-[calc(100vh-1039px)]">

                {/* Latest visas section starts here  */}
                <section className="bg-[#EDF5FF] py-10">
                    <LatestVisas></LatestVisas>

                </section>
                <section className="bg-[#EDF5FF] py-10">
                    <div className="bg-gray-900 text-green-300 py-16">
                        {/* Visa Highlights Section */}
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold">Visa Highlights</h2>
                            <p className="text-lg mt-4">
                                Discover why our visa services stand out. Here are some of our key features.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
                            {/* Fast Processing */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                                <div className="text-5xl mb-4">
                                    <i className="bi bi-clock"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Fast Processing</h3>
                                <p>Get your visa processed within 48 hours for selected countries.</p>
                            </div>

                            {/* Affordable Fees */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                                <div className="text-5xl mb-4">
                                    <i className="bi bi-cash"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Affordable Fees</h3>
                                <p>We offer competitive pricing with no hidden costs.</p>
                            </div>

                            {/* Global Coverage */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
                                <div className="text-5xl mb-4">
                                    <i className="bi bi-globe"></i>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Global Coverage</h3>
                                <p>Apply for visas to over 100+ countries from one platform.</p>
                            </div>

                            {/* 24/7 Support */}
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
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

                        {/* Trusted by Leading Companies */}
                        <div className="text-center mt-16">
                            <h2 className="text-4xl font-bold">Trusted by Leading Companies</h2>
                            <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
                                <i className="text-6xl bi bi-google"></i>
                                <i className="text-6xl bi bi-paypal"></i>
                                <i className="text-6xl bi bi-amazon"></i>
                                <i className="text-6xl bi bi-apple"></i>
                                <i className="text-6xl bi bi-microsoft"></i>
                                <i className="text-6xl bi bi-facebook"></i>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Latest visas section ends here  */}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomePage;