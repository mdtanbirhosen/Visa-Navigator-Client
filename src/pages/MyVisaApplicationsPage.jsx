import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../provider/AuthProvider";
import ReuseableTitle from "../components/ReuseableTitle";

const MyVisaApplicationsPage = () => {
    const { user } = useContext(AuthContext)
    const [appliedVisas, setAppliedVisas] = useState([]);
    useEffect(() => {
        fetch(`https://visa-navigator-server-side.vercel.app/appliedVisas/${user.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setAppliedVisas(data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [user?.email])
    console.log(appliedVisas)




    const handleCancel = (id) => {
        fetch(`https://visa-navigator-server-side.vercel.app/appliedVisas/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = appliedVisas.filter(visa => visa._id !== id);
                setAppliedVisas(remaining)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <header className="max-w-7xl mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="">

                {/* Visa details is here */}
                <section className="bg-[#EDF5FF] pt-10 min-h-[calc(100vh-500px)]">
                    <div className="max-w-7xl mx-auto">
                        <div>
                            <ReuseableTitle title={`Welcome ${user?.displayName || user?.email}`} paragraph={`Here are some visa information that you added to our website.You can also delete and Update your added visas information . Thanks for adding visas in our website ${user?.displayName || user?.email}.`}></ReuseableTitle>
                        </div>
                        <div className="bg-white rounded-lg px-3 pb-3 pt-10">
                            <div className="grid  gap-5 md:grid-cols-2 lg:grid-cols-3">
                                {
                                    appliedVisas.map(info => <div
                                        key={info._id}
                                        className="bg-[#EDF5FF] rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                                    >
                                        <div className="p-3">
                                            <div className="p-2 rounded-lg bg-white flex justify-between items-center">
                                                <img
                                                    src={info.visaInfo.countryImage}
                                                    alt={`${info.visaInfo.country} flag`}
                                                    className="h-[150px] md:h-[200px] w-full rounded-lg object-cover"
                                                />

                                            </div>
                                        </div>
                                        <div className="p-4 flex-1 space-y-1">
                                            <div>
                                                <h2 className="text-xl font-bold text-gray-800">{info.visaInfo.countryName}</h2>
                                                <p className="text-gray-600">
                                                    <strong>Visa Type:</strong> {info.visaInfo.visaType}
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>Processing Time:</strong> {info.visaInfo.processingTime}
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>Fee:</strong> {info.visaInfo.fee}$
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>Validity:</strong> {info.visaInfo.validity}
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>Application Method:</strong> {info.visaInfo.applicationMethod}
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>Applied date: </strong> {info.appliedDate}
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>Applicant&apos;s name :</strong> {info.fullName}
                                                </p>
                                                <p className="text-gray-600">
                                                    <strong>Applicant&apos;s email :</strong> {info.email}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="p-4 mt-auto flex  gap-5">
                                            <button
                                                onClick={()=>handleCancel(info._id)} className="px-7 py-3 font-semibold border-2 rounded-lg text-white bg-red-500 hover:bg-black w-full">
                                                Cancel
                                            </button>


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

export default MyVisaApplicationsPage;