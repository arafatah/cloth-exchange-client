import { Link, useLoaderData } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const ShowService = () => {
  const service = useLoaderData();

  console.log(service);
  return (
    <div>
      <Helmet>
        <title>FASHION | HOME</title>
      </Helmet>
      <div className="container mx-auto py-6">
        <h1 className="text-2xl font-semibold mb-4">NEW ARRIVALS</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.map((serviceDetail, index) => (
            <div
              key={index}
              className={`bg-white p-4 rounded-lg shadow-md ${
                index >= 6 ? "hidden" : ""
              }`}
            >
              <img
                src={serviceDetail.image}
                alt={serviceDetail.yourName}
                className="w-full h-80 object-cover rounded-md"
              />

              <div className="flex items-center mt-4 gap-3">
              <img className="h-14 w-12 rounded-xl" src={serviceDetail.authorPhoto} alt="" />
              <h2 className="text-lg font-semibold mt-2">
                Provider Name:{serviceDetail.yourName}
              </h2>
              
              </div>
              <h3 className="text-xl font-semibold mt-2">
                Name of the product: {serviceDetail.serviceName}
              </h3>
              <h3 className="text-xl font-semibold mt-2">
                {serviceDetail.description}
              </h3>
              <h3 className="text-xl font-semibold mt-2">
                Price: ${serviceDetail.price}
              </h3>
              <h3 className="text-xl font-semibold mt-2">
                {serviceDetail.serviceArea}
              </h3>
              <Link
                to={`/showService/${serviceDetail._id}`}
                className="flex justify-end btn"
              >
                Know more
                <FaArrowRightLong />
              </Link>
            </div>
          ))}
        </div>
        {service.length > 5 ? (
          <div className="flex justify-center mt-4">
            <Link to="/showAllService" className="btn">
              Show All SERVICES
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ShowService;
