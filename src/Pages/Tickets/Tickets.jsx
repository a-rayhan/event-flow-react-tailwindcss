import { useLoaderData } from "react-router-dom";
import TicketsCard from "../../Components/TicketsCard/TicketsCard";

const Tickets = () => {
    const tickets = useLoaderData();
    console.log(tickets);
    return (
        <div className="bg-[#211f54]">
            <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 lg:py-36">
                <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-white mb-8">
                            Explore Event Pricing
                        </h1>

                        <p className="md:w-[600px] text-lg mb-8 text-white">
                            A well-executed pricing strategy can contribute to event success by ensuring financial sustainability, maximizing attendance, and enhancing experience.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        tickets.map(ticket => <TicketsCard key={ticket.id} ticket={ticket} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Tickets;