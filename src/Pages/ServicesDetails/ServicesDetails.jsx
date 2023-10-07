import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServicesDetails = () => {
    const [service, setService] = useState([]);

    const servicesData = useLoaderData();

    const { detailsId } = useParams();

    useEffect(() => {
        const findServiceId = servicesData.find(serviceData => serviceData.id == detailsId);
        setService(findServiceId);
    }, [detailsId, servicesData]);

    return (
        <div className="max-w-7xl mx-auto px-5 pb-20 md:pb-28 lg:pb-36">
            <div className="max-w-7xl mx-auto p-5 lg:px-20 lg:py-20 md:pb-28 lg:pt-12 bg-[#f4f4f4] rounded-3xl">
                <div className="bg-gray-400 h-80 lg:h-[500px] rounded-3xl mb-10">
                    <img src={service.image} alt="" className="w-full h-full object-cover rounded-3xl" />
                </div>

                <div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#211f54] mb-4 md:mb-8">
                            {service.title}
                        </h2>

                        <p className="text-[#211f54] text-3xl md:text-4xl font-bold mb-4 md:my-5">
                            {service.price}
                        </p>
                    </div>

                    <p className="md:text-lg">
                        {service.details}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;