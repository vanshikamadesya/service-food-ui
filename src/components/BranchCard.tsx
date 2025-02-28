import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { BranchInfo } from "../data/branchInfo"; // ✅ Import BranchInfo type

interface BranchCardProps {
  branchInfo: BranchInfo;
}

const BranchCard: React.FC<BranchCardProps> = ({ branchInfo }) => {
  return (
    <div>
      {/* Map Image */}
      <div className="mb-6 relative">
        <div className="bg-gray-100 rounded-md h-48 overflow-hidden">
          <img
            src={branchInfo.image || "https://via.placeholder.com/150"}
            alt={branchInfo.image ? branchInfo.name : "No image available"}
            className="w-full h-full object-cover"
          />
          <div className="absolute right-4 bottom-4 bg-white rounded-md shadow-md p-4 max-w-xs z-10">
            <h3 className="font-medium text-gray-800">{branchInfo.location.name}</h3>
            <div className="flex items-center mt-1">
              <span className="text-sm">{branchInfo.location.rating}</span>
              <div className="flex text-yellow-400 ml-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-xs ${i < Math.floor(branchInfo.location.rating) ? "text-yellow-400" : "text-gray-300"}`}>★</span>
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">({branchInfo.location.reviewCount})</span>
            </div>
            <div className="mt-1 text-xs text-gray-600">
              <div className="flex items-center">
                <span className="mr-1">Supplier</span>
                <span className="mx-1">•</span>
                <span>{branchInfo.location.address}</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-red-500">{branchInfo.location.status}</span>
                <span className="mx-1">•</span>
                <span>{branchInfo.location.openingTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <h1 className="text-2xl font-bold text-gray-700 mb-4">{branchInfo.name}</h1>
      <div className="space-y-2">
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
