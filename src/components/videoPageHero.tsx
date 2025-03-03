import videoBtn from "../assets/images/video-btn.svg";
import mediaIcons from "../assets/images/h-icone.svg";
import heroBg from "../assets/images/video-bg-hero.png";

export default function VideoPageHero() {
  return (
    <div
      className="relative w-full h-[400px] md:h-[600px] bg-cover bg-center flex items-center px-4 md:px-16"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Content */}
      <div className="max-w-xl md:max-w-3xl text-left">
        <h1 className="text-2xl md:text-5xl font-bold text-[#FFFFFF]">
          Lorem Ipsum Dolor
        </h1>
        <p className="mt-2 md:mt-4 text-sm md:text-lg text-[#FFFFFF] opacity-80">
          Lorem Ipsum is simply dummy text of the printing and type setting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>

      {/* Video Button */}
      <img
        src={videoBtn}
        alt="Video Play Button"
        className="absolute left-4 md:left-10 bottom-4 md:bottom-10 w-10 h-10 md:w-14 md:h-14 cursor-pointer transition-transform transform hover:scale-110"
      />

      {/* Media Icons */}
      <img
        src={mediaIcons}
        alt="Social Media Icons"
        className="absolute right-4 md:right-10 bottom-4 md:bottom-10 w-14 md:w-20 transition-transform transform hover:scale-110"
      />
    </div>
  );
}
