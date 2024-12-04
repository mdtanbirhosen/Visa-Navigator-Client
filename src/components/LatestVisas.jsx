import ReuseableTitle from "./ReuseableTitle";

const LatestVisas = () => {
    const visaInformation = [
        {
            _id: 1,
            country: "United States",
            image: "https://example.com/us-flag.png",
            visa_type: "Tourist Visa",
            processing_time: "10-15 business days",
            required_documents: [
                "Valid passport",
                "Visa application form",
                "Recent passport-sized photograph",
                "Proof of financial means",
                "Travel itinerary",
                "Proof of accommodation"
            ],
            description: "The tourist visa allows you to visit the United States for leisure, tourism, or visiting friends and family.",
            age_restriction: "None",
            fee: "$160",
            validity: "6 months",
            application_method: "Online and in-person at the nearest U.S. consulate or embassy"
        },
        {
            _id: 2,
            country: "Canada",
            image: "https://example.com/canada-flag.png",
            visa_type: "Study Permit",
            processing_time: "4-6 weeks",
            required_documents: [
                "Valid passport",
                "Letter of acceptance from a designated learning institution",
                "Proof of funds",
                "Recent passport-sized photograph",
                "Medical examination report (if required)"
            ],
            description: "The study permit allows you to study at designated learning institutions in Canada.",
            age_restriction: "18+ unless accompanied by a guardian",
            fee: "CAD $150",
            validity: "Duration of the study program + 90 days",
            application_method: "Online or through Visa Application Centers (VACs)"
        },
        {
            _id: 3,
            country: "Japan",
            image: "https://example.com/japan-flag.png",
            visa_type: "Work Visa",
            processing_time: "1-3 months",
            required_documents: [
                "Valid passport",
                "Visa application form",
                "Recent passport-sized photograph",
                "Certificate of Eligibility",
                "Employment contract"
            ],
            description: "The work visa allows you to work in Japan in fields like education, engineering, or skilled labor.",
            age_restriction: "18+",
            fee: "¥3,000 - ¥6,000 depending on single or multiple entry",
            validity: "1-5 years",
            application_method: "In-person at the nearest Japanese embassy or consulate"
        },
        {
            _id: 1,
            country: "United States",
            image: "https://example.com/us-flag.png",
            visa_type: "Tourist Visa",
            processing_time: "10-15 business days",
            required_documents: [
                "Valid passport",
                "Visa application form",
                "Recent passport-sized photograph",
                "Proof of financial means",
                "Travel itinerary",
                "Proof of accommodation"
            ],
            description: "The tourist visa allows you to visit the United States for leisure, tourism, or visiting friends and family.",
            age_restriction: "None",
            fee: "$160",
            validity: "6 months",
            application_method: "Online and in-person at the nearest U.S. consulate or embassy"
        },
        {
            _id: 2,
            country: "Canada",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbelBCC8RfBQ4nwGsbRFoOyUxpdQ0fO4VE8g&s",
            visa_type: "Study Permit",
            processing_time: "4-6 weeks",
            required_documents: [
                "Valid passport",
                "Letter of acceptance from a designated learning institution",
                "Proof of funds",
                "Recent passport-sized photograph",
                "Medical examination report (if required)"
            ],
            description: "The study permit allows you to study at designated learning institutions in Canada.",
            age_restriction: "18+ unless accompanied by a guardian",
            fee: "CAD $150",
            validity: "Duration of the study program + 90 days",
            application_method: "Online or through Visa Application Centers (VACs)"
        },
        {
            _id: 3,
            country: "Japan",
            image: "https://example.com/japan-flag.png",
            visa_type: "Work Visa",
            processing_time: "1-3 months",
            required_documents: [
                "Valid passport",
                "Visa application form",
                "Recent passport-sized photograph",
                "Certificate of Eligibility",
                "Employment contract"
            ],
            description: "The work visa allows you to work in Japan in fields like education, engineering, or skilled labor.",
            age_restriction: "18+",
            fee: "¥3,000 - ¥6,000 depending on single or multiple entry",
            validity: "1-5 years",
            application_method: "In-person at the nearest Japanese embassy or consulate"
        }
    ];


    return (
        <div className="max-w-7xl mx-auto">
            <div>
                <ReuseableTitle title={"Latest Visas"} paragraph={"Some Latest visas are here. To see more click on “See all visas” button."}></ReuseableTitle>
            </div>
            <div className="grid  gap-5 bg-white rounded-lg px-3 py-10 md:grid-cols-2 lg:grid-cols-3">
                {
                    visaInformation.map(visaInfo => <div
                        key={visaInfo._id}
                        className="bg-[#EDF5FF] rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                    >
                        <div className="p-3">
                            <div className="p-2 rounded-full bg-white flex justify-between items-center">
                                <img
                                    src={visaInfo.image}
                                    alt={`${visaInfo.country} flag`}
                                    className="h-[70px] w-[70px] rounded-full object-cover"
                                />
                                <h2 className="text-xl font-bold text-gray-800 mr-3">
                                    {visaInfo.country}
                                </h2>
                            </div>
                        </div>
                        <div className="p-4 flex-1 space-y-1">
                            <div>
                                <h2 className="text-xl font-bold text-gray-800">{visaInfo.country}</h2>
                                <p className="text-gray-600">
                                    <strong>Visa Type:</strong> {visaInfo.visa_type}
                                </p>
                                <p className="text-gray-600">
                                    <strong>Processing Time:</strong> {visaInfo.processing_time}
                                </p>
                                <p className="text-gray-600">
                                    <strong>Fee:</strong> {visaInfo.fee}
                                </p>
                                <p className="text-gray-600">
                                    <strong>Validity:</strong> {visaInfo.validity}
                                </p>
                                <p className="text-gray-600">
                                    <strong>Application Method:</strong> {visaInfo.application_method}
                                </p>
                            </div>
                        </div>
                        <div className="p-4 mt-auto">
                            <button className="px-7 py-3 font-semibold text-primary-color border-primary-color border-2 rounded-lg hover:text-white hover:bg-primary-color w-full">
                                See Details
                            </button>
                        </div>
                    </div>
                    )
                }
            </div>

        </div>
    );
};

export default LatestVisas;