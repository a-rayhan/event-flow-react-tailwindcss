import { useLoaderData } from "react-router-dom";
import ScheduleCard from "../../Components/ScheduleCard/ScheduleCard";

const Schedules = () => {

    const schedulesData = useLoaderData();

    return (
        <div className="bg-[#f4f4f4]" data-aos="fade-up"
        data-aos-duration="1000">
            <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 lg:py-36">
                <div>
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#211f54] mb-4 text-center">
                            Event Schedules
                        </h1>

                    </div>

                    <p className="text-center text-lg mb-8 md:px-10 lg:px-32 xl:px-64">
                        Our event schedule features an impressive lineup of keynote speakers, thought-provoking panel discussions, interactive workshops, networking opportunities, and much more.
                    </p>
                </div>

                <div className="grid lg:grid-cols-1 gap-20 mt-14 bg-white px-5 py-10 md:p-20 rounded-3xl">
                    {
                        schedulesData.map(schedule => <ScheduleCard key={schedule.id} schedule={schedule} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Schedules;