import { Link, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ReuseableTitle from "../components/ReuseableTitle";

const AllVisasPage = () => {
    const loadedVisaInformation = useLoaderData();
    const handleFilterBy =(e)=>{
        console.log(e)
    }
    return (
        <div>
            <header className="max-w-7xl mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="min-h-[calc(100vh-500px)]">
                <section className="max-w-7xl mx-auto">
                    <div className="flex justify-end">
                        
                    <div className="max-w-48">
                        <select name="visaType" onChange={handleFilterBy} className="select w-full">
                            <option disabled selected>Filter By Visa Type</option>
                            <option>Tourist visa</option>
                            <option>Student visa</option>
                            <option>Official visa</option>
                            <option>Working Holiday Visa</option>

                        </select>
                    </div>
                    </div>
                </section>
                {/* Visa details is here */}
                <section className="bg-[#EDF5FF] pt-10">
                    <div className="max-w-7xl mx-auto">
                        <div>
                            <ReuseableTitle title={"All Visas"} paragraph={"Here is available all kinds of and of countries visas.visit which country you want to visit .Go to details for see more about that country."}></ReuseableTitle>
                        </div>
                        <div className="bg-white rounded-lg px-3 pb-3 pt-10">
                            <div className="grid  gap-5 sm:grid-cols-2   md:grid-cols-3 lg:grid-cols-4">
                                {
                                    loadedVisaInformation.map(visaInfo => <div
                                        key={visaInfo._id}
                                        className="bg-[#EDF5FF] rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                                    >
                                        <div className="p-3">
                                            <div className="p-2 rounded-lg bg-white flex justify-between items-center">
                                                <img
                                                    src={visaInfo.countryImage}
                                                    alt={`${visaInfo.country} flag`}
                                                    className="h-[150px]  md:h-[150px] w-full rounded-lg object-cover"
                                                />

                                            </div>
                                        </div>
                                        <div className="p-4 flex-1 space-y-1">
                                            <div>
                                                <h2 className="text-xl font-bold text-gray-800">{visaInfo.countryName}</h2>
                                                <p className="text-gray-600">
                                                    <strong>Visa Type:</strong> {visaInfo.visaType}
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>Processing Time:</strong> {visaInfo.processingTime}
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>Fee:</strong> {visaInfo.fee}$
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>Validity:</strong> {visaInfo.validity}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-4 mt-auto">
                                            <Link to={`/visa_details/${visaInfo._id}`}>
                                                <button className="px-7 py-3 font-semibold text-primary-color border-primary-color border-2 rounded-lg hover:text-white hover:bg-primary-color w-full">
                                                    See Details
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                    )
                                }
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

export default AllVisasPage;  