import { AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const MoreEvents = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 lg:py-34 relative">
            <div className="flex flex-col xl:flex-row justify-between xl:gap-32">
                <div className="xl:pe-20 flex flex-col justify-center">
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#211f54] mb-6 md:text-center xl:text-left">
                        More Events to Participate
                    </h1>

                    <p className="text-lg mb-8 md:text-center xl:text-left lg:px-20 xl:px-0">
                        Prepare to be inspired, informed, and motivated as these accomplished individuals take the stage to share their knowledge and ideas.
                    </p>

                    <NavLink to='/services'>
                        <div className="flex sm:justify-center xl:justify-start">
                            <button className="text-xl bg-[#4845e3] py-5 px-7 rounded-xl text-white font-medium w-60 mb-10">
                                Get Started
                            </button>
                        </div>
                    </NavLink>
                </div>

                <div className="xl:relative">
                    <div className="h-[500px] rounded-3xl hidden xl:block">
                        <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" className="w-full h-full object-cover rounded-3xl" />
                    </div>

                    <div className="md:w-[600px] xl:w-96 p-8 mx-auto bg-white rounded-2xl xl:absolute xl:top-20 xl:-left-36 shadow-2xl mb-6 xl:mb-0">
                        <div className="w-full h-56 sm:h-72 xl:h-56 mb-7">
                            <img src="https://images.unsplash.com/photo-1619498594340-4c078feb1661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" className="w-full h-full object-cover rounded-2xl" />
                        </div>

                        <div>
                            <button className="bg-[#211f54] text-white px-10 py-3 rounded-3xl text-lg font-medium mb-4">
                                Mathew Born
                            </button>

                            <h2 className="text-2xl font-semibold text-[#211f54] mb-3">
                                Business Conference for Solving Problems
                            </h2>

                            <div className="flex flex-col text-[#211f54] mb-7 gap-2 font-medium">
                                <p className="flex items-center gap-2">
                                    <AiFillClockCircle className="text-xl text-[#ed4458]" />
                                    12.00 to 3.00
                                </p>

                                <p className="flex items-center gap-2">
                                    <FaLocationDot className="text-xl text-[#ed4458]" />
                                    Club Media Hip Main Stage
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-[600px] xl:w-96 p-8 mx-auto rounded-3xl bg-[#ed4458] flex gap-5 xl:absolute xl:bottom-16 xl:-right-10">
                        <div className="w-24">
                            <img src="https://images.unsplash.com/photo-1619498594340-4c078feb1661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" className="w-full h-full object-cover rounded-3xl" />
                        </div>

                        <div className="flex-1 text-white">
                            <h2 className="text-xl font-semibold mb-3">
                                Annul Conference: Inspired UX Design
                            </h2>

                            <div className="flex flex-col mb-7 gap-2 font-medium">
                                <p className="flex items-center gap-2">
                                    <AiFillClockCircle className="text-xl" />
                                    12.00 to 3.00
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreEvents;