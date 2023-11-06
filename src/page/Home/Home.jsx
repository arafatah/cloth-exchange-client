import { Helmet } from "react-helmet-async";
import ShowService from "../ShowService/ShowService";
import Banner from "./Banner/Banner";
import Sponsor from "./Sponsor/Sponsor";
// import MobileApp from "../MobileApp/MobileApp";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FASHION | Home</title>
      </Helmet>
      <Banner />
      <Sponsor></Sponsor>
      <ShowService />
      {/* <MobileApp/> */}
    </div>
  );
};

export default Home;
