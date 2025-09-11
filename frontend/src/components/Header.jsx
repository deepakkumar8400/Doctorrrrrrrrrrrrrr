import { useState, useEffect } from 'react';
import { assets } from '../assets/assets';
import im1 from './111.png';
import im2 from './000.png';

const Header = () => {
    const images = [assets.header_img, im1, im2]; 
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className='relative flex flex-col md:flex-row flex-wrap bg-primary rounded-3xl px-6 md:px-10 lg:px-20 shadow-2xl overflow-hidden'>

            {/* --------- Header Left --------- */}
            <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-10 md:py-[10vw]'>
                <p className='text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight drop-shadow-lg'>
                    Book Appointment <br /> With Trusted Doctors
                </p>
                <div className='flex flex-col md:flex-row items-center gap-4 text-white text-base font-light'>
                    <img className='w-32 drop-shadow-sm' src={assets.group_profiles} alt="A group of doctors" />
                    <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> and schedule your appointment hassle-free.</p>
                </div>
                <a href='#speciality' className='flex items-center gap-2 bg-white px-8 py-4 mt-4 rounded-full text-[#595959] text-sm font-semibold m-auto md:m-0 hover:scale-105 transition-all duration-300 shadow-md hover:bg-gray-100'>
                    Book appointment <img className='w-3' src={assets.arrow_icon} alt="arrow icon" />
                </a>
            </div>

            {/* --------- Header Right --------- */}
            <div className='md:w-1/2 relative flex justify-center items-end'>
                <img 
                    key={currentImageIndex}
                    className='w-full md:absolute bottom-0 h-auto rounded-lg transition-all duration-1000 ease-in-out transform scale-100 md:scale-110 md:-translate-x-1/2 md:translate-y-10' 
                    src={images[currentImageIndex]} 
                    alt="Doctors"
                />
            </div>
        </div>
    );
}

export default Header;