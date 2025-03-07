import React, { useState } from "react";
import Bgmap from "../../assets/images/ContactUs/bgMap.png";
import PinIcon from "../../assets/images/ContactUs/pinIcon.svg";
import ActivePin from "../../assets/images/ContactUs/activePin.svg";
import BranchSelector from "./BranchSelector";
import { branchData } from "../../data/branchInfo";

// Define the type for pin positions
type PinPositionMap = {
  [key: string]: { top: string; left: string };
};

// Define pin positions for each branch on the map
const pinPositions: PinPositionMap = {
  // Auckland region (cluster in upper North Island)
  "AUCKLAND FOODSERVICE": { top: "25%", left: "40%" },
  "NATIONAL SUPPORT OFFICE": { top: "14%", left: "33%" },
  "AUCKLAND IMPORTS": { top: "40%", left: "41.2%" },
  "AUCKLAND REPACKS": { top: "58.5%", left: "23%" },
  "AUCKLAND LEONARD'S": { top: "87%", left: "17.5%" },
  
  // Other North Island locations
  "HAMILTON PRODUCE": { top: "20%", left: "36%" },
  "GISBORNE/TAIRAWHITI": { top: "68.9%", left: "26.3%" },
  "NAPIER/HAWKES BAY": { top: "51.8%", left: "35.5%" },
  "TARANAKI": { top: "38%", left: "31.3%" },
  "WELLINGTON (TE PĀTAKA)": { top: "66%", left: "21%" },
  
  // South Island locations
  "WESTPORT": { top: "53%", left: "30.3%" },
  "CHRISTCHURCH/CANTERBURY": { top: "28%", left: "35%" },
  "GREYMOUTH": { top: "34%", left: "45.3%" }
};

const Maps: React.FC = () => {
  // State for selected branch
  const [selectedBranch, setSelectedBranch] = useState("AUCKLAND FOODSERVICE");

  return (
    <div className="relative w-full h-screen sm:h-auto font-inter bg-[#1a2841] sm:bg-transparent" style={{ aspectRatio: "16/9" }}>
      {/* Map container with fixed aspect ratio for larger screens, full height for mobile */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center hidden sm:block"
        style={{
          backgroundImage: `url(${Bgmap})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Pin container that scales with the background - hidden on small screens */}
      <div className="absolute inset-0 hidden sm:block">
        {/* Map Pins */}
        {Object.keys(branchData).map((branch) => {
          if (!pinPositions[branch]) {
            console.log(`Missing position for: ${branch}`);
            return null;
          }
          
          return (
            <div 
              key={branch}
              className="absolute cursor-pointer transition-transform hover:scale-110 group"
              style={{ 
                top: pinPositions[branch].top, 
                left: pinPositions[branch].left,
                transform: "translate(-50%, -50%)",
                zIndex: 20
              }}
              onClick={() => setSelectedBranch(branch)}
            >
              <img 
                src={selectedBranch === branch ? ActivePin : PinIcon} 
                alt={branch} 
                className={selectedBranch === branch 
                  ? "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8" 
                  : "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6"}
              />
              {/* Tooltip that appears on hover */}
              <div className="hidden group-hover:block absolute bottom-full left-1/2 transform -translate-x-1/2 bg-white text-xs p-1 rounded shadow mb-1 whitespace-nowrap z-30">
                {branch}
              </div>
            </div>
          );
        })}
      </div>

      {/* Branch selector component (contains dropdown and branch card) */}
      <BranchSelector 
        selectedBranch={selectedBranch} 
        setSelectedBranch={setSelectedBranch}
      />
    </div>
  );
};

export default Maps;