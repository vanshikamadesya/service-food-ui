import homeVideo from "../../assets/images/Homevideo.mp4";
import Button from "../Button";

const BgImage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={homeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex justify-start items-center h-full sm:px-10 md:px-28 lg:px-48 pb-28">
        <div className="absolute bottom-0 flex flex-col space-y-[600px] overflow-y-auto h-full w-full pt-[78vh] pb-70 pl-10 tracking-widest">
          <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-bold">
            Behind Every <br className="hidden sm:block" />
            <span className="block mt-4">Great Chef</span>
          </h1>
          <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-bold">
            For every business <br className="hidden sm:block" /> big and small
          </h1>
          <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-bold">
            Trusted Supplier <br className="hidden sm:block" /> relationships
          </h1>
          <h1 className="text-white text-4xl sm:text-5xl md:text-8xl font-bold">
            Across <br className="hidden sm:block" /> New Zealand
            <div className="md:mb-44">
              <p className="text-white text-lg sm:text-xl md:text-2xl mt-14 tracking-widest md:px-5   ">
                Nationwide Family-Owned <br className="hidden sm:block" /> Full
                Service Food Distribution
              </p>

              <Button
                text="Create Account"
                bgColor="bg-white"
                textColor="text-black"
                className="md:py-4 md:px-20 md:ml-3 md:text-lg"
              />
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BgImage;
