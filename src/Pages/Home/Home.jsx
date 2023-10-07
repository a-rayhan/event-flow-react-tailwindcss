import Banner from '../../Components/Banner/Banner'
import WhyShouldJoin from '../../Components/WhyShouldJoin/WhyShouldJoin'
import Schedules from '../Schedules/Schedules';
import MoreEvents from '../../Components/MoreEvents/MoreEvents'
import Services from '../Services/Services';
import Tickets from '../Tickets/Tickets';

const Home = () => {
    return (
        <div>
            <Banner />
            <WhyShouldJoin />
            <Schedules />
            <MoreEvents />
            <Services />
            <Tickets />
        </div>
    );
};

export default Home;