import { NavLink } from "react-router-dom";

const ExplorePricing = () => {
    return (
        <div className="bg-[#211f54]" data-aos="fade-up" data-aos-duration="1500">
            <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 lg:py-36">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-4 md:mb-8">
                            Explore Event Pricing
                        </h1>

                        <p className="md:w-[600px] text-lg mb-8 text-white">
                            A well-executed pricing strategy can contribute to event success by ensuring financial sustainability, maximizing attendance, and enhancing experience.
                        </p>
                    </div>

                    <div>
                        <NavLink to='/tickets'>
                            <button className="text-xl bg-[#2e2c66] hover:bg-[#ed4458] py-5 px-7 rounded-lg text-white font-medium w-60 mb-10">
                                See Price Details
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExplorePricing;