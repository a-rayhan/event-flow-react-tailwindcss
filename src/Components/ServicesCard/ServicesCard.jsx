import { NavLink } from "react-router-dom";

const ServicesCard = () => {
    return (
        <div>
            <div className="mx-auto bg-white rounded-3xl shadow-2xl">
                <div className="px-8 pt-8 ">
                    <div className="h-56 mb-7">
                        <img src="https://images.unsplash.com/photo-1619498594340-4c078feb1661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" className="w-full h-full object-cover rounded-3xl" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-[#211f54] mb-3">
                            Event Planning
                        </h2>

                        <p className="text-lg mb-5">
                            Event planning services involve conceptualizing and strategizing events based on client requirements.
                        </p>

                    </div>

                    <p className="text-[#211f54] text-4xl font-bold my-5">
                        $599
                    </p>
                </div>

                <NavLink to='/services/details'>
                    <button className="text-xl bg-[#4845e3] py-7 rounded-b-3xl text-white font-semibold w-full">
                        View Details
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default ServicesCard;