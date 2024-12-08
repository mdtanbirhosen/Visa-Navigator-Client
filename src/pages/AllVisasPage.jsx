import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReuseableTitle from "../components/ReuseableTitle";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AllVisasPage = () => {
    const loadedVisaInformation = useLoaderData();
    const [filterByVisaType, setFilterByVisaType] = useState("");

    const handleFilterBy = (e) => {
        setFilterByVisaType(e.target.value);
    };

    // Ensure loadedVisaInformation is an array before filtering
    const filteredVisas = Array.isArray(loadedVisaInformation)
        ? filterByVisaType
            ? loadedVisaInformation.filter(
                (visa) =>
                    visa.visaType &&
                    visa.visaType.toLowerCase() === filterByVisaType.toLowerCase()
            )
            : loadedVisaInformation
        : [];

    return (
        <div>
            <header className="max-w-7xl mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="min-h-[calc(100vh-500px)]">
                <section className="max-w-7xl mx-auto">
                    <div className="flex justify-end">
                        <div className="max-w-48">
                            <select
                                name="visaType"
                                onChange={handleFilterBy}
                                className="select w-full"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Filter By Visa Type
                                </option>
                                <option value="">All</option>
                                <option value="Tourist visa">Tourist visa</option>
                                <option value="Student visa">Student visa</option>
                                <option value="Official visa">Official visa</option>
                                <option value="Working Holiday Visa">Working Holiday Visa</option>
                            </select>
                        </div>
                    </div>
                </section>
                {/* Visa details is here */}
                <section className="bg-[#EDF5FF] pt-10">
                    <div className="max-w-7xl mx-auto">
                        <div>
                            <ReuseableTitle
                                title={"All Visas"}
                                paragraph={
                                    "Here is available all kinds of and of countries visas. Visit which country you want to visit. Go to details for more about that country."
                                }
                            ></ReuseableTitle>
                        </div>
                        <div className="bg-white rounded-lg px-3 pb-3 pt-10">
                            <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {filteredVisas.map((visaInfo) => (
                                    <div
                                        key={visaInfo._id}
                                        className="bg-[#EDF5FF] rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                                    >
                                        <div className="p-3">
                                            <div className="p-2 rounded-lg bg-white flex justify-between items-center">
                                                <img
                                                    src={visaInfo.countryImage}
                                                    alt={`${visaInfo.country} flag`}
                                                    className="h-[150px] md:h-[150px] w-full rounded-lg object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="p-4 flex-1 space-y-1">
                                            <div>
                                                <h2 className="text-xl font-bold text-gray-800">
                                                    {visaInfo.countryName}
                                                </h2>
                                                <p className="text-gray-600">
                                                    <strong>Visa Type:</strong> {visaInfo.visaType}
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>Processing Time:</strong>{" "}
                                                    {visaInfo.processingTime}
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
                                ))}
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
