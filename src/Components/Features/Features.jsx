import speaker from '../../assets/image/speaker.svg';
import events from '../../assets/image/events.svg';
import tribe from '../../assets/image/tribe.svg';

const Features = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 lg:py-36" data-aos="fade-up"
            data-aos-duration="1000">
            <div className='mb-14'>
                <div>
                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-[#211f54] mb-4 text-center">
                        The Features
                    </h1>

                </div>

                <p className="text-center text-lg mb-8 md:px-10 lg:px-32 xl:px-52">
                    Event learning often refers to the practice of reviewing and analyzing past events, incidents, or accidents to identify lessons learned and improve future performance.
                </p>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img src={speaker} alt="" />
                    </div>

                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold mb-2'>
                            Visionary Speaker
                        </h1>

                        <p className='text-lg'>
                            We have gathered some of the most influential and forward-thinking individuals to share their ideas.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img src={events} alt="" />
                    </div>

                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold mb-2'>
                            Worldwide Events
                        </h1>

                        <p className='text-lg'>
                            Consider enrolling in a university, college, or vocational school to pursue a degree or in a field of interest.
                        </p>
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <img src={tribe} alt="" />
                    </div>

                    <div className='text-center'>
                        <h1 className='text-2xl font-semibold mb-2'>
                            Help Find Your Tribe
                        </h1>

                        <p className='text-lg'>
                            Many events have dedicated hashtags or social media groups where attendees can connect the event.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;