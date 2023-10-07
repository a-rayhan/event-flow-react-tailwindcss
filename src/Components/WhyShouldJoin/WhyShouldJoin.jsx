import { BsPeopleFill } from "react-icons/bs";
import { PiMicrophoneStageFill } from "react-icons/pi";

const WhyShouldJoin = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 lg:py-36">
            <div className="flex flex-col xl:flex-row justify-between gap-14">
                <div>
                    <div>
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#211f54] mb-8">
                            Welcome to the Greatest Event Agency
                        </h1>

                        <p className="text-lg mb-8">
                            GatherFlow is an independent experiential agency providing strategic, creative, event management, and logistics services to brands across the globe.
                        </p>
                    </div>

                    <div className="flex flex-col gap-5">
                        <div className="flex gap-5">
                            <div className="bg-[#ed4458] w-16 h-16 rounded-2xl flex justify-center items-center">
                                <BsPeopleFill className="text-3xl sm:text-4xl text-white" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-1">
                                    Happy Client
                                </h3>

                                <p className="text-lg">
                                    The right keynote speaker something special to your event.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="bg-[#4845e3] w-16 h-16 rounded-2xl flex justify-center items-center">
                                <PiMicrophoneStageFill className="text-3xl sm:text-4xl text-white" />
                            </div>

                            <div>
                                <h3 className="text-2xl font-semibold mb-1">
                                    World Best Speakers
                                </h3>

                                <p className="text-lg">
                                    Topics are most important to strive audience mind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col  gap-6">
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="h-60 w-full rounded-3xl">
                                <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" className="w-full h-full rounded-3xl object-cover" />
                            </div>

                            <div className="h-60 w-full rounded-3xl">
                                <img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1862&q=80" alt="" className="w-full h-full rounded-3xl object-cover" />
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row gap-6">
                            <div className="h-60 xl:w-40 rounded-3xl">
                                <img src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" className="w-full h-full rounded-3xl object-cover" />
                            </div>
                            <div className="h-60 xl:w-80 rounded-3xl">
                                <img src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" className="w-full h-full rounded-3xl object-cover" />
                            </div>
                            <div className="h-60 xl:w-40 rounded-3xl">
                                <img src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" className="w-full h-full rounded-3xl object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyShouldJoin;