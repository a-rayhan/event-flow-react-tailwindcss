import Banner from '../../Components/Banner/Banner'
import WhyShouldJoin from '../../Components/WhyShouldJoin/WhyShouldJoin'
import MoreEvents from '../../Components/MoreEvents/MoreEvents'
import Services from '../Services/Services';
import WhyConference from '../../Components/WhyConference/WhyConference';
import Features from '../../Components/Features/Features';
import ExplorePricing from '../../Components/ExplorePricing/ExplorePricing';

const Home = () => {
    return (
        <div>
            <Banner />
            <WhyShouldJoin />
            <Services />
            <MoreEvents />
            <WhyConference />
            <hr className="max-w-7xl mx-auto px-5" />
            <Features />
            <ExplorePricing />
        </div>
    );
};

export default Home;