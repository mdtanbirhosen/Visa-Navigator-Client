import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AddVisaPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = new FormData(event.target);
        const countryName = form.get("countryName")
        const countryImage = form.get("countryImage")
        const visaType = form.get("visaType")
        const processingTime = form.get("processingTime")
        const requiredDocuments = form.getAll("requiredDocuments");
        const description = form.get("description")
        const ageRestriction = form.get("ageRestriction")
        const fee = form.get("fee")
        const validity = form.get("validity")
        const applicationMethod = form.get("applicationMethod")



        const newVisa = { countryName, countryImage, visaType, processingTime, requiredDocuments, description,ageRestriction, fee, validity, applicationMethod}
        console.log(newVisa)
    }
    return (
        <div>
            <header className="max-w-7xl mx-auto">
                <Navbar></Navbar>
            </header>
            <main className="min-h-[calc(100vh-500px)]">

                {/* Add your visa here*/}
                <section className="bg-[#EDF5FF] pt-10">
                    <div className="max-w-7xl  mx-auto md:py-10 py-0  lg:py-16 rounded-xl">
                        <h2 className="font-semibold text-2xl md:text-4xl text-center">Add A New Visa</h2>
                        <div className="divider"></div>
                        <form onSubmit={handleSubmit} className="space-y-3 p-5" >
                            {/* country image and country name row */}
                            <div className="flex gap-5 items-center">
                                {/* Country name */}
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-lg">Country name</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Enter country name"
                                        className="input w-full"
                                        name='countryName'
                                    />
                                </div>
                                {/* country image */}
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-lg ">Country image</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Enter image URL"
                                        className="input w-full"
                                        name='countryImage'
                                    />
                                </div>
                            </div>
                            {/* visa type and processing time row */}
                            <div className="flex gap-5 items-center">
                                {/* visa type optional input */}
                                <div className="w-full ">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl ">Visa Type</span>
                                    </label>
                                    <select name="visaType" className="select w-full">
                                        <option disabled selected>Choose a visa type</option>
                                        <option>Tourist visa</option>
                                        <option>Student visa</option>
                                        <option>Official visa</option>
                                    </select>
                                </div>
                                {/* processing time. */}
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Processing Time</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Enter processing time"
                                        className="input w-full"
                                        name='processingTime'
                                    />
                                </div>
                            </div>
                            {/* required documents and description  row. */}
                            <div className="flex gap-5 ">
                                {/* Required documents */}
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl ">Required Documents</span>
                                    </label>
                                    <div className="flex  justify-between ">
                                        <div className="flex flex-col gap-3">
                                            <label >
                                                <input
                                                    type="checkbox"
                                                    name="requiredDocuments"
                                                    value="Valid Passport"
                                                />
                                                Valid Passport
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="requiredDocuments"
                                                    value="Visa Application Form"
                                                />
                                                Visa Application Form
                                            </label>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="requiredDocuments"
                                                    value="Recent Passport-sized Photograph"
                                                />
                                                Recent Passport-sized Photograph
                                            </label>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    name="requiredDocuments"
                                                    value="Medical examination report"
                                                />
                                                Medical examination report
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* description */}
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Description</span>
                                    </label>
                                    <textarea
                                        name="description"
                                        placeholder="Write description here.."
                                        className="textarea textarea-bordered textarea-lg w-full "></textarea>
                                </div>
                            </div>
                            {/* age restriction and fee row */}
                            <div className="flex gap-5 items-center">
                                {/* Age Restriction */}
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl ">Age Restriction</span>
                                    </label>
                                    <input type="number"
                                        placeholder="Age restriction in years"
                                        className="input w-full"
                                        name='ageRestriction'
                                    />
                                </div>
                                {/* Fee */}
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Visa Fee</span>
                                    </label>
                                    <input type="number"
                                        placeholder="Visa fee"
                                        className="input w-full"
                                        name='fee'
                                    />
                                </div>
                            </div>
                            {/* validity and application method field */}
                            <div className="flex gap-5 items-center">
                                {/* validity */}
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl ">Validity</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Enter visa validity time"
                                        className="input w-full"
                                        name='validity'
                                    />
                                </div>
                                {/* application method */}
                                <div className="w-full">
                                    <label className="label">
                                        <span className="label-text font-semibold text-xl">Application Method</span>
                                    </label>
                                    <input type="text"
                                        placeholder="Enter application method"
                                        className="px-5 outline-primary-color border-2 py-5 bg-white w-full rounded-xl"
                                        name='applicationMethod'

                                    />
                                </div>
                            </div>


                            <button type="submit" className="font-semibold text-xl py-4 w-full bg-primary-color hover:bg-secondary-color rounded-xl text-white">Add visa</button>
                        </form>

                    </div>


                </section>

            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AddVisaPage;