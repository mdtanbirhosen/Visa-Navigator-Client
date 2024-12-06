import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";

const MyVisaApplicationsPage = () => {
    const {user} = useContext(AuthContext)
    fetch(`http://localhost:4000/appliedVisas/${user.email}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(error =>{
        console.log(error)
    })
    return (
        <div>
            <header className="max-w-7xl mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="min-h-[calc(100vh-500px)]">

                {/* Visa details is here */}
                <section className="bg-[#EDF5FF] pt-10">
                </section>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MyVisaApplicationsPage;