import ShowService from "../ShowService/ShowService";
import Banner from "./Banner/Banner";
import Sponsor from "./Sponsor/Sponsor";


const Home = () => {
    return (
        <div>
            <Banner/>
            <Sponsor></Sponsor>
            <ShowService/>
        </div>
    );
};

export default Home;