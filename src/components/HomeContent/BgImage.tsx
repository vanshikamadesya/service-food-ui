import homeImage from "../../assets/images/Home.png";
import Button from "../Button";

const BgImage = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen w-full"
        style={{
          backgroundImage: `url(${homeImage})`,
        }}
      >
        <div className="flex justify-start items-center h-full bg-black bg-opacity-50 px-6 sm:px-10 md:px-16 lg:px-32">
          <div className="mt-20 sm:mt-28 text-center sm:text-left">
            <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold">
              For every business <br className="hidden sm:block" /> big and
              small
            </h1>
            <Button text="Create Account" bgColor="bg-white" textColor="text-black" className="mt-10" />
          </div>
        </div>

        {/* Right-bottom arrows */}
        <div className="absolute bottom-8 right-0 sm:right-20 flex space-x-3 sm:space-x-4">
          <button className="text-white md:text-6xl sm:text-5xl  ">&larr;</button>
          <button className="text-white md:text-6xl sm:text-5xl ">&rarr;</button>
        </div>
      </div>
    </div>
  );
};

export default BgImage;
