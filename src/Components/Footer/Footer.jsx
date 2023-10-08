import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { IoMdMicrophone } from "react-icons/io";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-5 py-12 lg:py-20 xl:py-28 flex flex-col xl:flex-row xl:gap-24 gap-10" data-aos="fade-up"
        data-aos-duration="1000">
                <div className="">
                    <NavLink to='/' className='text-[40px] font-bold flex items-center mb-3'>
                        <IoMdMicrophone className="text-[#4845e3] text-5xl" />
                        <p>
                            Event<span className="text-[#4845e3]">Flow</span>
                        </p>
                    </NavLink>

                    <p className="text-lg md:w-[600px]">
                        Full service event planning and management company dedicated to creating unforgettable experiences.
                    </p>
                </div>

                <div >
                    <h2 className="text-[#4845e3] text-2xl font-semibold mb-4">
                        Follow Us On
                    </h2>

                    <div className="flex gap-4">
                        <div className="bg-[#f1f1f1] w-20 h-20 rounded-2xl flex justify-center items-center cursor-pointer hover:shadow-2xl">
                            <BsFacebook className="text-[#4845e3] text-3xl" />
                        </div>

                        <div className="bg-[#f1f1f1] w-20 h-20 rounded-2xl flex justify-center items-center cursor-pointer hover:shadow-2xl">
                            <BsTwitter className="text-[#4845e3] text-3xl" />
                        </div>

                        <div className="bg-[#f1f1f1] w-20 h-20 rounded-2xl flex justify-center items-center cursor-pointer hover:shadow-2xl">
                            <BsLinkedin className="text-[#4845e3] text-3xl" />
                        </div>

                        <div className="bg-[#f1f1f1] w-20 h-20 rounded-2xl flex justify-center items-center cursor-pointer hover:shadow-2xl">
                            <BsYoutube className="text-[#4845e3] text-3xl" />
                        </div>
                    </div>
                </div>
            </div>

            <hr />

            <div className="max-w-7xl mx-auto px-5 py-5 flex justify-center gap-24" data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0">
                <p className="text-lg">
                Copyright © All rights reserved <NavLink to='/' className='underline font-semibold text-[#4845e3]'> EventFlow</NavLink>
                </p>
            </div>
        </div>
    );
};

export default Footer;