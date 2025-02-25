import banner from "../assets/images/banner.png";

export default function OncePlace() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full text-white px-12 md:px-24 lg:px-36">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight font-inter">
          Everything You Need <br />
          <span className="text-white">All In Once Place</span>
        </h1>
        <p className="text-sm md:text-lg mt-4 max-w-lg text-left">
          Lorem Ipsum is simply dummy text of the printing and type setting industry. 
          Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
  );
}
