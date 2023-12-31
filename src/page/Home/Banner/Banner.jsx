import { Typewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  // const  {text}  = Typewriter({
  //   words: ["Unique", "Influential", "Trendy"],
  //   loop: {},
  // });

  return (
    <div className="container mx-auto mt-6">
      <div className="flex item-center justify-center bg-[#F4F6F5] rounded-2xl pt-20">
        <div className="flex items-center justify-center ">
          <div className="md:w-[736px] md:pl-12 space-y-4 mb-5">
            <h2 className="md:text-8xl text-6xl pl-3 font-black text-black">
              <span className="p-4 bg-white">LET’S</span> EXPLORE{" "}
              <span className="bg-[#EBD96B] px-4">UNIQUE</span> CLOTHES.
            </h2>
            <span className="font-normal pl-3 md:text-3xl text-gray-900">
              Live for Influential and{" "}
              <span>
                <Typewriter
                  words={["Unique", "Influential", "Trendy"]}
                  loop={Infinity}
                />
              </span>
              <Cursor />
            </span>
            <div className="flex items-center mt-4 gap-7">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="190"
                  height="32"
                  viewBox="0 0 190 32"
                  fill="none"
                >
                  <path
                    d="M0 30.6152C48 -11.7848 146.667 -1.05149 190 9.61518C176.4 33.6152 57.6667 33.6152 0 30.6152Z"
                    fill="#EBD96B"
                  />
                </svg>
              </div>
              <div>
                <button className="btn btn-neutral ">SHOP NOW</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            className="md:w-[736px] md:h-[550px] hidden md:block "
            src="https://i.ibb.co/xhypVgz/incendiary-fantastically-beautiful-girl-coat-eco-fur-moves-fun-picture-lovely-lady-pink-clothes-remo.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
