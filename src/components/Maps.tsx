import React, { useState } from "react";
import Bgmap from "../assets/images/ContactUs/bgMap.png";
import { ChevronDown } from "lucide-react";
import { branchData, BranchInfo } from "../data/branchInfo"; // ✅ Import BranchInfo
import BranchCard from "./BranchCard";

const Maps: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState("AUCKLAND FOODSERVICE");

  const branches = Object.keys(branchData);
  const branchInfo: BranchInfo = branchData[selectedBranch]; // ✅ Ensure correct type

  const selectBranch = (branch: string) => {
    setSelectedBranch(branch);
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="relative h-screen font-sans" // Ensure Inter is applied globally
      style={{
        height: "87vh",
        backgroundImage: `url(${Bgmap})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Semi-transparent background overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content container */}
      <div className="relative h-full flex justify-center md:justify-end items-center px-4 md:pr-20 pt-10">
        <div className="max-w-md w-full md:w-2/5 lg:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden mx-4 my-4">
          <div className="p-6">
            {/* Dropdown Selector */}
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-500 mb-2">Select Branch</h2>
              <div className="relative">
                <div
                  className="border border-gray-300 rounded-md p-3 flex items-center justify-between cursor-pointer"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="text-gray-700">{selectedBranch}</span>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
                {isDropdownOpen && (
                  <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg">
                    <div className="py-2 text-gray-500 px-3 border-b">(Select an option)</div>
                    {branches.map((branch) => (
                      <div
                        key={branch}
                        className={`py-3 px-3 cursor-pointer hover:bg-gray-100 ${
                          branch === selectedBranch ? "bg-gray-200" : ""
                        }`}
                        onClick={() => selectBranch(branch)}
                      >
                        {branch}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Branch Details Card */}
            <BranchCard branchInfo={branchInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
