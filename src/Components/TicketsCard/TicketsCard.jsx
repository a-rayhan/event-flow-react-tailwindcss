import { NavLink } from "react-router-dom";

const TicketsCard = () => {
    return (
        <div>
            <div className="border-2 border-white rounded-3xl px-5 py-7">
                <div className="bg-[#4845e3] text-center p-10 rounded-3xl mb-7">
                    <h2 className="text-2xl text-white font-semibold mb-3">
                        Basic Ticket
                    </h2>

                    <p className="text-4xl text-white font-bold">
                        $60
                    </p>
                </div>

                <div className="flex flex-col justify-center items-center gap-5 text-lg text-white">
                    <p>
                        One catered lunch
                    </p>

                    <p>
                        Afternoon snacks
                    </p>
                    <p>
                        Fun swag
                    </p>
                    <p>
                        Entrance Afterparty
                    </p>
                </div>

                <NavLink to='/tickets'>
                    <button className="text-xl bg-[#181645] py-5 px-7 rounded-xl text-white font-medium w-full mt-10">
                        Buy a ticket
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default TicketsCard;