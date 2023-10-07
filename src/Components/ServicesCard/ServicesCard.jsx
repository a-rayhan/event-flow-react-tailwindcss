const ServicesCard = () => {
    return (
        <div>
            <div className="mx-auto bg-white rounded-2xl shadow-2xl">
                <div className="px-8 pt-8 ">
                    <div className="h-56 mb-7">
                        <img src="https://images.unsplash.com/photo-1619498594340-4c078feb1661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" className="w-full h-full object-cover rounded-2xl" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-[#211f54] mb-3">
                            Event Planning
                        </h2>

                        <p className="text-lg mb-5">
                            Event planning services involve conceptualizing and strategizing events based on client requirements.
                        </p>

                    </div>
                </div>
                
                <button className="text-lg bg-[#4845e3] py-5 rounded-b-xl text-white font-semibold w-full">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ServicesCard;