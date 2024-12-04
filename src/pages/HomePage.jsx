import Banner from "../components/Banner";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div>
            <header>
            <Banner></Banner>
            </header>
            <main className="min-h-[calc(100vh-500px)]">

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomePage;