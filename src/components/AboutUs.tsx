
import videoImage from '../assets/bg-banner.jpg'; // Ensure this path is correct
import Aneil from '../assets/Leader/Aneil.png';
import Carolyn from '../assets/Leader/Carolyn.png';
import Nikul from '../assets/Leader/Nikul Balar.png';
import Ravi from '../assets/Leader/Ravi.png';
import Richard from '../assets/Leader/Richard.png';
import Ross from '../assets/Leader/Ross.png';
import Stan from '../assets/Leader/Stan.png';
import Suneil from '../assets/Leader/suneil.png';
// If you want to use this image


const AboutUs: React.FC = () => {
  return (
    <div>
  
      {/* Hero Section */}
      <div 
        className="relative w-full py-[160px] min-h-[860px]  bg-center bg-contain flex items-end justify-start px-12" 
        style={{ backgroundImage: `url(${videoImage})`, width: '100%', backgroundSize: 'cover' }} 
      >
        {/* Content Overlay */}
        <div className='max-w-[1666px] w-full mx-auto px-[15px]'>
        <div className="relative z-10 p-6 rounded-lg text-white max-w-[627px]">
          <h1 className="text-[94px] font-semibold text-white leading-[100px] ">Behind Every Great Chef</h1>
          <p className="text-[29px] font-normal mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-12 bg-gray-100">
        <h2 className="text-center text-4xl font-bold mb-8">Our History</h2>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-4xl">
            <div className="absolute inset-0 flex items-center justify-between">
              <div className="h-1 bg-gray-300 flex-grow" />
              <div className="h-1 bg-gray-300 flex-grow" />
              <div className="h-1 bg-gray-300 flex-grow" />
              <div className="h-1 bg-gray-300 flex-grow" />
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">1983</span>
              <span className="text-gray-500">1994</span>
              <span className="text-gray-500">1997</span>
              <span className="text-gray-500">2001</span>
              <span className="text-gray-500">2005</span>
            </div>
          </div>

          {/* History Item */}
          <div className="bg-white shadow-lg rounded-lg p-6 mt-4 max-w-md">
            <img 
              src="path/to/your/image.jpg" 
              alt="History Image"
              className="w-full h-auto rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold">1997</h3>
            <p>
              The business acquires Service Foods, which gives them access to the chilled and frozen goods market. The same year, the company changes its name to Service Foods and joins Cooperative Group, opening up national distribution.
            </p>
          </div>
        </div>
      </div>

      {/* Impact Section
      <ImpactSection /> */}

      {/* Leadership Section */}
      <div className="relative py-12 bg-[#EFEBE7]">
        <h2 className="text-center text-4xl font-bold mb-8 text-[#3A342B]">Our Leadership</h2>
        <div className="flex justify-center mb-4">
          <div className="border-t-4 border-[#3A342B] w-40" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Leadership Cards */}
          <div className="bg-white rounded-lg shadow-lg p-4 relative">
            <img src={Aneil} alt="Aneil Balar" className="w-full h-60 object-cover rounded-md" />
            <h3 className="font-bold text-lg mt-2 text-[#A97F41]">Aneil Balar</h3>
            <p className="text-sm font-semibold text-[#4C3525]">Managing Director</p>
            <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.             </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 relative">
            <img src={Nikul} alt="Nikul Balar" className="w-full h-60 object-cover rounded-md" />
            <h3 className="font-bold text-lg mt-2 text-[#A97F41]">Nikul Balar</h3>
            <p className="text-sm font-semibold text-[#4C3525]">Director & Chief Technology Officer</p>
            <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.             </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 relative">
            <img src={Stan} alt="Stan Balar" className="w-full h-60 object-cover rounded-md" />
            <h3 className="font-bold text-lg mt-2 text-[#A97F41]">Stan Balar</h3>
            <p className="text-sm font-semibold text-[#4C3525]">Founder</p>
            <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.             </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 relative">
            <img src={Richard} alt="Richard Campbell" className="w-full h-60 object-cover rounded-md" />
            <h3 className="font-bold text-lg mt-2 text-[#A97F41]">Richard Campbell</h3>
            <p className="text-sm font-semibold text-[#4C3525]">Chief Operating Officer</p>
            <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.             </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 relative">
            <img src={Ross} alt="Ross Buckley" className="w-full h-60 object-cover rounded-md" />
            <h3 className="font-bold text-lg mt-2 text-[#A97F41]">Ross Buckley</h3>
            <p className="text-sm font-semibold text-[#4C3525]">Chairman Of The Board</p>
            <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.             </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 relative">
            <img src={Suneil} alt="Suneil Connor" className="w-full h-60 object-cover rounded-md" />
            <h3 className="font-bold text-lg mt-2 text-[#A97F41]">Suneil Connor</h3>
            <p className="text-sm font-semibold text-[#4C3525]">Chief Financial Officer</p>
            <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.             </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 relative">
            <img src={Carolyn} alt="Carolyn Mortland" className="w-full h-60 object-cover rounded-md" />
            <h3 className="font-bold text-lg mt-2 text-[#A97F41]">Carolyn Mortland</h3>
            <p className="text-sm font-semibold text-[#4C3525]">Independent Director</p>
            <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.             </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 relative">
            <img src={Ravi} alt="Ravi Patel" className="w-full h-60 object-cover rounded-md" />
            <h3 className="font-bold text-lg mt-2 text-[#A97F41]">Ravi Patel</h3>
            <p className="text-sm font-semibold text-[#4C3525]">Gm - National Procurement & Supply Chain</p>
            <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
