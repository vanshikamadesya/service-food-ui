import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { BranchInfo } from "../../data/branchInfo"; // Path already correct

interface BranchCardProps {
  branchInfo: BranchInfo;
}

const BranchCard: React.FC<BranchCardProps> = ({ branchInfo }) => {
  return (
    <div className="space-y-4">
      {/* Compact image section */}
      <div className="mb-4">
        <div className="bg-gray-100 rounded-md h-40 overflow-hidden">
          <img
            src={branchInfo.image || "https://via.placeholder.com/150"}
            alt={branchInfo.image ? branchInfo.name : "No image available"}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Compact contact info */}
      <h1 className="text-xl font-bold text-gray-700 mb-3">
        {branchInfo.name}
      </h1>
      <div className="space-y-1.5">
        <div className="flex items-start">
          <Phone className="h-5 w-5 text-gray-500 mr-2 mt-1" />
          <span className="text-gray-700">{branchInfo.phone}</span>
        </div>
        <div className="flex items-start">
          <Mail className="h-5 w-5 text-gray-500 mr-2 mt-1" />
          <span className="text-gray-700">{branchInfo.email}</span>
        </div>
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-1" />
          <div className="text-gray-700">
            <div>{branchInfo.address}</div>
            <div>{branchInfo.postal}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchCard;
