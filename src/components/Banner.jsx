import { useEffect, useState } from "react";
import Navbar from "./Navbar";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            image: "./banner-bg.jpg",
            title: "Welcome to Lingo Bingo",
        },
        {
            id: 2,
            image: "https://i.ibb.co/m8Fwwqh/banner-3.jpg",
            title: "Join Our Community",
        },
        {
            id: 3,
            image: "https://i.ibb.co/mGtmmLx/depositphotos-18837227-stock-illustration-a-boy-writing.jpg",
            title: "Learn Languages Effectively",
        },
        {
            id: 4,
            image: "https://i.ibb.co/55sZtHp/bbd7fc8f765d2fa2943383c665274a26d3ada8a8-2560x1260.jpg",
            title: "Start Your Journey Today",
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
            {/* Navbar Over Image */}
            <div className="absolute inset-0 z-50">
                <Navbar />
            </div>

            {/* Dynamic Background */}
            <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-700"
                style={{
                    backgroundImage: `url(${slides[currentSlide].image})`,
                }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3646558b] via-transparent to-[#3646558b] z-10"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-center items-center z-20 text-white">
                <h2 className="text-2xl sm:text-3xl font-bold">{slides[currentSlide].title}</h2>
            </div>

            {/* Pagination */}
            <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2 z-30">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${
                            currentSlide === index ? "bg-white" : "bg-gray-400"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
