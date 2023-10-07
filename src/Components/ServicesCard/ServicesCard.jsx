import { NavLink, useParams } from "react-router-dom";

const ServicesCard = ({ service }) => {
    const { id, image, title, description, price } = service;
    const { detailsId } = useParams();
    return (
        <div>
            <div className="mx-auto bg-white rounded-3xl shadow-2xl">
                <div className="px-8 pt-8 ">
                    <div className="h-56 mb-7">
                        <img src={image} alt="" className="w-full h-full object-cover rounded-3xl" />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-[#211f54] mb-3">
                            {title}
                        </h2>

                        <p className="text-lg mb-5">
                            {description}
                        </p>

                    </div>

                    <p className="text-[#211f54] text-4xl font-bold my-5">
                        {price}
                    </p>
                </div>

                <NavLink to={`/services/${id}`}>
                    <button className="text-xl bg-[#4845e3] py-7 rounded-b-3xl text-white font-semibold w-full">
                        View Details
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default ServicesCard;