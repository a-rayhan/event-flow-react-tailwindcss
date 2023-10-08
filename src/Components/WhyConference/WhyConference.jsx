import learner from '../../assets/image/learner.svg';
import networking from '../../assets/image/networking .svg';
import business from '../../assets/image/business.svg';

const WhyConference = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 lg:py-36" data-aos="fade-up"
            data-aos-duration="1000">
            <div className='mb-14'>
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#211f54] mb-4 text-center">
                        Why Should Attend Conference
                    </h1>

                </div>

                <p className="text-center text-lg mb-8 md:px-10 lg:px-32 xl:px-52">
                    Passionate about creating innovative and compelling experiences that inspire people and foster more meaningful connections throughout our communities and globally.
                </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img src={learner} alt="" />
                    </div>

                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold mb-2'>
                            Learning
                        </h1>

                        <p className='text-lg'>
                            The process of acquiring knowledge and understanding through experiences and events that occur in one's life.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img src={networking} alt="" />
                    </div>

                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold mb-2'>
                            Networking
                        </h1>

                        <p className='text-lg'>
                            Determine what you want to achieve through networking at the event. It could be meeting specific individuals.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img src={business} alt="" />
                    </div>

                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold mb-2'>
                            Business Practical
                        </h1>

                        <p className='text-lg'>
                            Event businesses are practical ventures that involve planning, organizing, and executing various types of events.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyConference;