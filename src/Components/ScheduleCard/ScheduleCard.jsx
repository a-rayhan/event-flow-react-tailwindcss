import { AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ScheduleCard = () => {
    return (
        <div className="max-w-[800px] mx-auto flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="h-20 w-20 rounded-full">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" alt="" className="w-full h-full rounded-full" />
            </div>

            <div className="flex-1">
                <p className="text-[#ed4458] mb-2">
                    Jeff Robins <br className="md:hidden" /> <span className="text-[#6e7191]">(Artist Engineering)</span>
                </p>

                <h2 className="text-[#211f54] text-xl md:text-3xl font-semibold mb-3">
                    The Modern Engineering Methods
                </h2>

                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20 text-lg text-[#211f54] mb-7">
                    <p className="flex items-center gap-2">
                        <AiFillClockCircle className="text-xl" />
                        12.00 to 3.00
                    </p>

                    <p className="flex items-center gap-2">
                        <FaLocationDot className="text-xl text-[#ed4458]" />
                        Club Media Hip Main Stage
                    </p>
                </div>

                <p className="text-lg mb-6">
                    Get ready to be inspired, entertained, and moved, as we embark on this extraordinary adventure together. Welcome, one and all, to an event that will leave an indelible mark on our hearts and minds. Let the festivities begin!
                </p>

                <NavLink to='/tickets'>
                    <button className="bg-[#211f54] text-white py-4 px-8 rounded-md text-lg font-semibold">
                        Buy Ticket
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default ScheduleCard;