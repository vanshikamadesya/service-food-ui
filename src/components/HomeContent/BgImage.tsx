import homeImage from "../../assets/images/Home.png";
import Button from "../Button";

const BgImage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src={homeImage}
        alt="Home"
        className="absolute inset-0 w-full h-full "
      />
      <div className="relative flex justify-start items-center h-full bg-opacity-50 px-6 sm:px-10 md:px-14 lg:px-32">
        <div className=" sm:mt-28 text-center sm:text-left md:ml-20 ">
          <h1 className="text-white text-4xl sm:text-5xl md:text-5xl font-bold tracking-wider md:mt-16">
            Behind Every <br className="hidden sm:block" /> Great Chef
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-[16px] mt-8 tracking-wider md:px-5 ">
            Nationwide Family-Owned <br className="hidden sm:block" /> Full
            Service Food Distribution
          </p>
          <Button
            text="Create Account"
            bgColor="bg-white"
            textColor="text-black"
            className="mt-3 md:ml-5"
          />
        </div>
      </div>
      {/* Right-bottom arrows */}
      <div className="absolute bottom-8 right-0 sm:right-20 flex space-x-3 sm:space-x-4">
        <button className="text-white md:text-6xl sm:text-5xl">&larr;</button>
        <button className="text-white md:text-6xl sm:text-5xl">&rarr;</button>
      </div>
    </div>
  );
};

export default BgImage;
