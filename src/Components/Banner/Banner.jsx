import { NavLink } from "react-router-dom";

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 pt-8 md:pt-16">
            <div>
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold text-center leading-tight text-[#211f54] mb-4">
                    Events, Meetups & <br /> Conferences
                </h1>

                <p className="text-center text-lg mb-8 lg:px-36 xl:px-64">
                    We are a full service international event planning and design studio based in United States. Global clients seek our services to plan, design, and produce their special events, not only in USA, but all over the world.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-4">
                    <NavLink to='/tickets' className='bg-[#4845e3] py-3 sm:py-5 sm:px-7 rounded-md text-white font-medium text-center w-full sm:w-auto'>
                        <button className="text-xl">
                            Buy your ticket
                        </button>
                    </NavLink>

                    <NavLink to='/schedules' className='bg-[#ed4458] py-3 sm:py-5 sm:px-7 rounded-md text-white font-medium text-center w-full sm:w-auto'>
                        <button className="text-xl">
                            Explore event
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Banner;