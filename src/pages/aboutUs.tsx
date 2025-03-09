import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; 
import { Pagination } from "swiper/modules";
import videoImage from "../assets/images/bg-banner.jpg";
import teamMembers from "../data/teamMembers";
import ImpactSection from "../components/tab-carousel";
import { impactSlides } from "../data/impactSlides";
import { greatChiefSlides } from "../data/greatChiefSlides";
import Timeline from "../components/TimeLine";
import { timelineData } from "../data/TimeLineData";
import OurValues from "../components/OurValues";
import Hero from "../components/Hero";

const Impact = () => {
  return (
    <ImpactSection
      slides={impactSlides}
      mainTitle="HOW WE’RE MAKING AN IMPACT"
    />
  );
};

function GreatChief() {
  return (
    <ImpactSection
      slides={greatChiefSlides}
      mainTitle="Behind Every Great Chef"
      showDownloadButton={false}
    />
  );
}

const AboutUs = () => {
  // Define content inside the component
  const title = "Behind Every Great Chef";
  const subtitle =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
  const backgroundImage = videoImage;

  return (
    <div className="font-['Inter']">
      {/* Hero Section */}
      <Hero
        title={title}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
        titleWidthPercent={50}
        subtitleWidthPercent={38}
      />
      <div className="flex justify-center items-center min-h-screen bg-[#EFEBE7]">
        <Timeline items={timelineData} />
      </div>
      <GreatChief />
      <OurValues />
      <Impact />

      {/* Leadership Section */}
      <div className="relative py-12 bg-[#EFEBE7]">
        <h2 className="text-center text-4xl font-bold mb-8 text-[#4C3525]">
          Our Leadership
        </h2>
        <div className="flex justify-center mb-6">
          <div className="border-t-4 border-[#4C3525] w-40" />
        </div>

        {/* Swiper for Mobile */}
        <div className="sm:hidden px-4">
          <Swiper
            modules={[Pagination]}
            pagination={false}
            spaceBetween={15}
            slidesPerView={1.2}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            centeredSlides={true}
          >
            {teamMembers.map(({ name, image, role, description }) => (
              <SwiperSlide key={name}>
                <div className="bg-white rounded-lg shadow-lg p-6 text-left mx-2">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-60 object-cover rounded-md"
                  />
                  <h3 className="font-bold text-lg mt-4 text-[#A97F41]">
                    {name}
                  </h3>
                  <p className="text-sm font-semibold text-[#4C3525] mt-1">
                    {role}
                  </p>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid Layout for Tablets & Desktops */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {teamMembers.map(({ name, image, role, description }) => (
            <div
              key={name}
              className="bg-white rounded-lg shadow-lg p-6 text-left"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-60 object-cover rounded-md"
              />
              <h3 className="font-bold text-lg mt-4 text-[#A97F41]">{name}</h3>
              <p className="text-sm font-semibold text-[#4C3525] mt-1">
                {role}
              </p>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
