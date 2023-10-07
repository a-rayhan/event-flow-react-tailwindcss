import Banner from '../../Components/Banner/Banner'
import WhyShouldJoin from '../../Components/WhyShouldJoin/WhyShouldJoin'
import MoreEvents from '../../Components/MoreEvents/MoreEvents'
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <WhyShouldJoin />
            <Services />
            <MoreEvents />
        </div>
    );
};

export default Home;