import React from "react";
import Button from "./Button";
import { businessFeatures } from "../data/homeIconData";

const HomeIcon = () => {
  return (
    <div>
      <div className="bg-[#EFEBE7] py-16 px-6 sm:px-8 font-inter">
        <div className="max-w-screen-xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl md:text-[45px] tracking-normal font-bold mb-20 text-gray-900">
            Let's take your business to the next level
          </h1>
          
          <div className="flex flex-col sm:flex-row justify-center gap-8 text-center">
            {businessFeatures.map((feature, index) => (
              <React.Fragment key={feature.id}>
                {/* Feature Item */}
                <div className="flex flex-col items-center max-w-xl">
                  <img src={feature.icon} alt={feature.alt} className="w-[80px] h-20 mb-4" />
                  <p className="text-[#847F7F] text-lg">
                    {feature.description}
                  </p>
                </div>
                
                {/* Add divider between items, but not after the last item */}
                {index < businessFeatures.length - 1 && (
                  <div className="hidden sm:flex h-40 mt-8 border-l-2 border-gray-500"></div>
                )}
              </React.Fragment>
            ))}
          </div>
          
          {/* Create Account Button */}
          <div className="flex justify-center mt-20">
            <Button 
              text="Create Account" 
              bgColor="bg-[#7B5F3D]" 
              textColor="text-white" 
              className="hover:bg-[#5F472D] px-20 py-3 text-lg" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIcon;