// import Lottie from "lottie-react";
// import { useEffect, useRef } from "react";
// import animationData from "../../Animation.json";

const MobileApp = () => {
  //   const container = useRef(null);

  //   useEffect(() => {
  //     Lottie.loadAnimation({
  //       container: container.current,
  //       renderer: "svg",
  //       loop: true,
  //       autoplay: true,
  //       animationData: animationData,
  //     });
  //   }, []);

  return (
    <div className="container flex justify-center items-center mx-auto my-10">
      <div className="">
        <div className="w-1/2 space-y-9">
          <h2 className="text-5xl font-black">DOWNLOAD APP & GET THE VOUCHER!</h2>
          <p className="text-[#7C7C7C] font-medium text-2xl">
            Get 30% off for first transaction using Rondovision mobile app for
            now.
          </p>
        </div>
      </div>
      <div className="w-1/2 text-6xl">
        Ola
      </div>
      {/* <div className="container" ref={container}></div> */}
    </div>
  );
};

export default MobileApp;
