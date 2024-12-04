import { FaUserAstronaut } from "react-icons/fa6";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
        <div className="bg-primary-color flex items-center justify-center min-h-screen">
            <div className="w-2/3 lg:w-2/5 bg-base-100 p-5 md:p-8 lg:p-10 rounded-sm">
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 ">
                    <div className="text-7xl md:text-9xl"><FaUserAstronaut></FaUserAstronaut></div>
                    <div className="text-center">
                        <h1 className="text-5xl  md:text-7xl font-extrabold">404</h1>
                        <p className="my-3">~ Page Not Found~</p>
                        <Link to={'/'}> <button  className="px-7 py-3 font-semibold text-primary-color border-primary-color border-2 rounded-lg hover:text-white hover:bg-primary-color">Back to Home</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;