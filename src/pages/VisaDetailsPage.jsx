import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const VisaDetailsPage = () => {
    const singleVisa = useLoaderData();
    console.log(singleVisa)

    return (
        <div>
            <header className="max-w-7xl mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="min-h-[calc(100vh-500px)]">

                {/* Visa details is here */}
                <section className="bg-[#EDF5FF] py-10 px-2">
                    <h1 className="text-center font-semibold text-4xl mb-3">Details for {singleVisa.countryName} visa</h1>
                    <div className="max-w-7xl mx-auto bg-white p-5 rounded-lg">
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="md:w-1/2 w-full">
                                <img
                                    src={singleVisa.countryImage}
                                    className="rounded-lg w-full "
                                    alt="Country Image" />
                            </div>
                            <div >
                                <h2 className="text-4xl font-bold mb-2">{singleVisa.countryName}</h2>
                                <div className="font-medium">
                                    <p>Visa Type: {singleVisa.visaType}</p>
                                    <p>Processing Time: {singleVisa.processingTime}</p>
                                    <p>Age Restriction: {singleVisa.ageRestriction}</p>
                                    <p>Validity: {singleVisa.validity}</p>
                                    <p>Fee: ${singleVisa.fee}</p>

                                    <p>Application Method: {singleVisa.applicationMethod}</p>
                                    <p>Description: {singleVisa.description}</p>
                                    <div>
                                        <h3 className="text-lg mt-2">Required Documents:</h3>
                                        <ul className="list-disc *:ml-4 *:text-gray-600">
                                            {
                                                singleVisa.requiredDocuments.map((visa, index)=> <li key={index}>{visa}</li>)
                                            }
                                        </ul>
                                    </div>
                                    <button className="px-7 py-3 font-semibold  bg-primary-color  rounded-lg text-white hover:bg-black ">Apply for the visa</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default VisaDetailsPage;