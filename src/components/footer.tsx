import React from "react";
import cartImage from "../assets/images/cart.svg";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import androidImage from "../assets/images/andriod.png";
import iPhoneImage from "../assets/images/iPhone .png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#332821] text-white w-full">
      {/* Subscribe Section */}
      <div className="bg-[#86704D] border-t-[1.5px] border-[#BCB5A4] py-5 md:py-16 ">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <h2 className="font-outfit font-bold text-lg md:text-4xl md:text-left px-6 md:px-12 text-center">
            Subscribe to Our Newsletter
          </h2>
          <div className="flex w-full md:w-auto mt-2 md:mt-0 md:pr-32 justify-center">
            <div className="flex w-full max-w-[250px] md:max-w-none">
              <input
                type="email"
                placeholder="Enter your email address"
                className="border border-gray-300 p-2 w-[70%] md:w-[360px] text-black text-[13px] h-8 md:h-auto"
              />
              <button className="bg-[#332D25] text-white px-3 py-1 md:px-6 md:py-3 font-semibold hover:bg-[#a99b87] text-[13px] h-8 md:h-auto whitespace-nowrap w-auto min-w-[90px]">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="bg-[#332821] py-8 -mb-[50px] mt-9 pr-20 pl-4">
        <div className="max-w-7xl mx-auto px-11 grid grid-cols-1 md:grid-cols-2 gap-7 ">
          {/* Left Section */}
          <div className="text-[#BCB5A4] space-y-4 max-w-[500px]  sm:mt-0  ">
            <div className="hidden sm:flex items-start mt-6">
              <img src={cartImage} className="h-[110px] mr-3" alt="Cart" />
              <p className="text-sm leading-relaxed tracking-wide font-normal font-dmSans">
                Lorem ipsum dolor sit amet consectetur. Amet porta accumsan ac
                in quis elementum at duis. Placerat nec donec sed adipiscing
                semper turpis luctus. Felis aenean hac quis risus sit. Lobortis
                ultrices fermentum pellentesque tortor.
              </p>
            </div>

            {/* Contact Us Section */}
            <div className="mt-0 sm:mt-6 py-2">
              <hr className="border-[#d0c4b7] mt-6 mb-6 hidden sm:block" />

              {/* Contact Section - Email Below "Contact Us" on Small Screens */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 py-1">
                <h4 className="text-lg font-semibold font-dmSans  sm:mt-0">
                  Contact us:
                </h4>
                <a
                  href="mailto:hello@servicefoods.co.nz"
                  className="underline text-[#d0c4b7] font-dmSans tracking-wider mt-2 sm:mt-0"
                >
                  hello@servicefoods.co.nz
                </a>
              </div>

              {/* Download App Section with Icons */}
              <div className="flex items-center space-x-2 mt-2">
                <p className="text-[#BCB5A4] md:text-lg font-dmSans tracking-wider mt-3">
                  Download App{" "}
                </p>
                <div className="flex px-3 mt-3">
                  <img
                    src={androidImage}
                    alt="Android"
                    className="w-6 h-7 mr-2"
                  />
                  <img src={iPhoneImage} alt="Apple" className="w-6 h-7" />
                </div>
              </div>
              <hr className="border-[#d0c4b7] mt-4 mb-4 block sm:hidden" />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between px-2 space-y-8 md:space-y-0 md:space-x-11  ">
            {/* Useful Links */}
            <div>
              <h3 className="text-xl font-bold mb-5 text-[#BCB5A4] font-outfit ">
                Useful Links
              </h3>
              <ul className="text-[#BCB5A4] space-y-2 font-dmSans ">
                <li className="sm:hidden">&gt;&gt;&nbsp; About us</li>
                <li className="sm:hidden">&gt;&gt;&nbsp;Become a Customer</li>
                <li className="sm:hidden">&gt;&gt;&nbsp; Existing Customer</li>
                <li className="sm:hidden">&gt;&gt;&nbsp; Privacy Policy</li>
                <li className="sm:hidden">&gt;&gt;&nbsp; Careers</li>
                <li className="sm:hidden">&gt;&gt;&nbsp; Contact</li>
                <li className="hidden sm:block">About us</li>
                <li className="hidden sm:block">Become a Customer</li>
                <li className="hidden sm:block">Existing Customer</li>
                <li className="hidden sm:block">Privacy Policy</li>
                <li className="hidden sm:block">Careers</li>
                <li className="hidden sm:block">Contact</li>
              </ul>
            </div>
            <hr className="border-[#d0c4b7] mt-4 mb-4 block sm:hidden" />

            {/* Branch Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[#BCB5A4] font-inter">
                Select Branch
              </h3>
              <div className="relative mb-4">
                <select
                  className="w-[240px] sm:w-[360px] h-[45px] sm:h-[55px] bg-transparent border border-[#d0c4b7] 
  px-3 sm:px-5 py-2 sm:py-4 rounded-lg focus:outline-none text-[#BCB5A4] 
  text-xs sm:text-sm appearance-none pr-8 sm:pr-10 relative font-inter"
                >
                  <option>NATIONAL SUPPORT OFFICE</option>
                </select>
                {/* Custom Bigger Arrow */}
                <div className="absolute top-1/2 right-4 sm:right-6 ht- transform -translate-y-1/2 pointer-events-none">
                  <svg
                    width="50"
                    height="35"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </div>
              </div>

              <div className="text-[#BCB5A4] text-sm py-3">
                <p className="font-bold py-2 text-[#BCB5A4] font-inter text-[16px]">
                  NATIONAL SUPPORT OFFICE
                </p>
                <p className="text-[#BCB5A4] font-medium font-inter text-[15px]/6 mt-2">
                  P +64 (09) 258 5010
                  <br />
                  EOrdersAKL@servicefoods.co.nz
                  <br />
                  221 Ihumatao Road, Mangere, Auckland
                  <br />
                  PO Box: 53050, Auckland Airport, Mangere
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="text-[#BCB5A4] text-sm py-8">
        <hr className="border-[#d0c4b7] w-full my-4 hidden md:block" />

        <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">
          <p className="text-center md:text-left font-normal text-lg font-dmSans">
            Copyright © 2025 By <strong>Service Foods</strong>. All Rights
            Reserved.
          </p>
          <div className="flex space-x-3  md:mb-1 md:mt-2 px-20">
            {[
              { icon: Linkedin, link: "#" },
              { icon: Instagram, link: "#" },
              { icon: Facebook, link: "#" },
            ].map(({ icon: Icon, link }, index) => (
              <a
                key={index}
                href={link}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#d0c4b7] text-[#29211b] hover:bg-[#b9a899]"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
