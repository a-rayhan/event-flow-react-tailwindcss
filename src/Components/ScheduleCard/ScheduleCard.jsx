import { AiFillClockCircle } from "react-icons/ai";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ScheduleCard = ({ schedule }) => {
    const { image, name, job, topic, description, time, location } = schedule;
    return (
        <div className="max-w-[800px] mx-auto flex flex-col md:flex-row gap-4 md:gap-8">
            <div className="h-20 w-20 rounded-full">
                <img src={image} alt="" className="w-full h-full rounded-full object-cover" />
            </div>

            <div className="flex-1">
                <p className="text-[#ed4458] mb-2">
                    {name} <br className="md:hidden" /> <span className="text-[#6e7191]">({job})</span>
                </p>

                <h2 className="text-[#211f54] text-xl md:text-3xl font-semibold mb-3">
                    {topic}
                </h2>

                <div className="flex flex-col lg:flex-row lg:items-center lg:gap-20 text-lg text-[#211f54] mb-7">
                    <p className="flex items-center gap-2">
                        <AiFillClockCircle className="text-xl" />
                        {time}
                    </p>

                    <p className="flex items-center gap-2">
                        <FaLocationDot className="text-xl text-[#ed4458]" />
                        {location}
                    </p>
                </div>

                <p className="text-lg mb-6">
                    {description}
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