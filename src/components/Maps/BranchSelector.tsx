import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { branchData, BranchInfo } from "../../data/branchInfo";
import BranchCard from "./BranchCard";

interface BranchSelectorProps {
  selectedBranch: string;
  setSelectedBranch: (branch: string) => void;
  // Prop to control content order of both main sections and card elements
  contentOrder?: {
    main?: Array<"selector" | "image" | "info">;
    card?: Array<"title" | "phone" | "email" | "address">;
  }
}

const BranchSelector: React.FC<BranchSelectorProps> = ({ 
  selectedBranch, 
  setSelectedBranch,
  // Default order if not specified
  contentOrder = {
    main: ["selector", "image", "info"],
    card: ["title", "phone", "email", "address"]
  }
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const branches = Object.keys(branchData);
  const branchInfo: BranchInfo = branchData[selectedBranch];

  const selectBranch = (branch: string) => {
    setSelectedBranch(branch);
    setIsDropdownOpen(false);
  };

  // Component for branch selector dropdown
  const SelectorComponent = () => (
    <div className="mb-4 font-inter">
      <h2 className="text-sm md:text-[16px] font-medium text-gray-500 mb-2 md:mb-3">Select Branch</h2>
      <div className="relative">
        <div
          className="border border-gray-500 rounded-md p-2 md:p-4 flex items-center justify-between cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-[11px] md:text-sm text-[#666666E5] truncate pr-2 font-medium">{selectedBranch}</span>
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
  );

  // Component for branch image
  const ImageComponent = () => (
    <div className="mb-4">
      <div className="bg-gray-100 rounded-md h-48 md:h-[300px] overflow-hidden mt-7 md:mt-10 mb-7">
        <img
          src={branchInfo.image || "https://via.placeholder.com/150"}
          alt={branchInfo.image ? branchInfo.name : "No image available"}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  // Component for branch information - passing contentOrder to BranchCard
  const InfoComponent = () => (
    <div className="mb-4">
      <BranchCard 
        name={branchInfo.name}
        phone={branchInfo.phone}
        email={branchInfo.email}
        address={branchInfo.address}
        postal={branchInfo.postal}
        contentOrder={contentOrder.card}
      />
    </div>
  );

  // Define a mapping of component types to their respective components
  const components: Record<string, React.ReactNode> = {
    'selector': <SelectorComponent key="selector" />,
    'image': <ImageComponent key="image" />,
    'info': <InfoComponent key="info" />
  };

  const mainOrder = contentOrder.main || ["selector", "image", "info"];

  return (
    <div className="absolute inset-0 flex items-center justify-center sm:justify-end p-2 sm:p-4 font-inter">
      <div className="w-[320px] sm:w-[340px] md:w-[360px] lg:w-[550px]
                    min-h-[300px] md:min-h-[360px]
                    bg-white rounded-lg shadow-lg overflow-hidden 
                    mx-auto sm:mx-6 md:mx-8 lg:mx-20
                    z-10">
        <div className="p-5 md:p-12 h-[450px] md:h-[680px] ">
          {/* Render components in the specified order */}
          {mainOrder.map((type) => (
            <React.Fragment key={type}>
              {components[type]}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BranchSelector;
