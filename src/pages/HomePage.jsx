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
                <section className="bg-[#EDF5FF] pt-10">
                    <LatestVisas></LatestVisas>
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