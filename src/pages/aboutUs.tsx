import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Use this for all styles
import { Pagination } from 'swiper/modules';
import videoImage from '../assets/bg-banner.jpg';
import teamMembers from '../data/teamMembers';

const AboutUs: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="relative w-full py-32 sm:py-48 min-h-[600px] sm:min-h-[860px] bg-center bg-cover flex items-end justify-start px-6 sm:px-12"
        style={{ backgroundImage: `url(${videoImage})` }}
      >
        
        
        {/* Content Overlay */}
        <div className='relative z-10 max-w-[627px] text-white'>
          <h1 className="text-4xl sm:text-[50px] lg:text-[70px] font-semibold leading-tight sm:leading-[90px]">
            Behind Every Great Chef
          </h1>
          <p className="text-lg sm:text-[20px] mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="relative py-12 bg-[#EFEBE7]">
        <h2 className="text-center text-4xl font-bold mb-8 text-[#3A342B]">Our Leadership</h2>
        <div className="flex justify-center mb-6">
          <div className="border-t-4 border-[#3A342B] w-40" />
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
                  <img src={image} alt={name} className="w-full h-60 object-cover rounded-md" />
                  <h3 className="font-bold text-lg mt-4 text-[#A97F41]">{name}</h3>
                  <p className="text-sm font-semibold text-[#4C3525] mt-1">{role}</p>
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">{description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Grid Layout for Tablets & Desktops */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {teamMembers.map(({ name, image, role, description }) => (
            <div key={name} className="bg-white rounded-lg shadow-lg p-6 text-left">
              <img src={image} alt={name} className="w-full h-60 object-cover rounded-md" />
              <h3 className="font-bold text-lg mt-4 text-[#A97F41]">{name}</h3>
              <p className="text-sm font-semibold text-[#4C3525] mt-1">{role}</p>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;