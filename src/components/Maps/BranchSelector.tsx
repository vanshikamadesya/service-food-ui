import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { branchData, BranchInfo } from "../../data/branchInfo";
import BranchCard from "./BranchCard";

interface BranchSelectorProps {
  selectedBranch: string;
  setSelectedBranch: (branch: string) => void;
}

const BranchSelector: React.FC<BranchSelectorProps> = ({ 
  selectedBranch, 
  setSelectedBranch 
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const branches = Object.keys(branchData);
  const branchInfo: BranchInfo = branchData[selectedBranch];

  const selectBranch = (branch: string) => {
    setSelectedBranch(branch);
    setIsDropdownOpen(false);
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center sm:justify-end p-2 sm:p-4">
      <div className="w-[320px] sm:w-[340px] md:w-[360px] lg:w-[380px]
                      min-h-[360px]
                      bg-white rounded-lg shadow-lg overflow-hidden 
                      mx-auto sm:mx-6 md:mx-8 lg:mx-10
                      z-10">
        <div className="p-4">
          {/* Dropdown Selector */}
          <div className="mb-4">
            <h2 className="text-base font-medium text-gray-500 mb-2">Select Branch</h2>
            <div className="relative">
              <div
                className="border border-gray-300 rounded-md p-2 flex items-center justify-between cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="text-sm text-gray-700 truncate pr-2">{selectedBranch}</span>
                <ChevronDown className="h-4 w-4 flex-shrink-0 text-gray-400" />
              </div>
              {isDropdownOpen && (
                <div className="absolute z-20 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
                  <div className="py-1 text-sm text-gray-500 px-3 border-b">(Select an option)</div>
                  {branches.map((branch) => (
                    <div
                      key={branch}
                      className={`py-2 px-3 text-sm cursor-pointer hover:bg-gray-100 ${
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

          {/* Branch card */}
          <div className="overflow-auto" style={{ minHeight: "260px" }}>
            <BranchCard branchInfo={branchInfo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchSelector; 