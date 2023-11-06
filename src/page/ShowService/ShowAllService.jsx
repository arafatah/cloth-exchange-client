import { Helmet } from "react-helmet-async";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const ShowAllService = () => {
  const service = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>FASHION | All Services</title>
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
                className="w-full h-[600px] object-cover rounded-md"
              />
              <h3 className="text-2xl font-medium mt-2 mx-5 text-black">
                 {serviceDetail.serviceName}
              </h3>
              <h3 className="text-base font-light mt-2 mx-5 text-black">
                {serviceDetail.description}
              </h3>
              
              <h3 className="text-base font-light mt-2 mx-5 text-black">
                {serviceDetail.serviceArea}
              </h3>
              <h3 className="text-base  font-medium mt-2 mx-5 text-green-500">
                Price: ${serviceDetail.price}
              </h3>
              <div className="flex items-center mt-4 mb-3 mx-5 gap-3">
              <img className="h-12 w-12 rounded-full" src={serviceDetail.authorPhoto} alt="" />
              <h2 className="text-base font-medium text-black mt-2">
                {serviceDetail.yourName}
              </h2>
              </div>
              <Link
                to={`/showService/${serviceDetail._id}`}
                className="flex justify-end btn btn-ghost text-black"
              >
                Know more
                <FaArrowRightLong />
              </Link>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ShowAllService;
