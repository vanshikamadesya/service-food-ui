import React from "react";

interface BranchCardProps {
  name: string;
  phone: string;
  email: string;
  address: string;
  postal?: string;
  image?: string;
  contentOrder?: Array<"title" | "phone" | "email" | "address">;
}

const BranchCard: React.FC<BranchCardProps> = ({
  name,
  phone,
  email,
  address,
  postal,
  contentOrder = ["title", "phone", "email", "address"]
}) => {
  // Create components for each content section
  const contentComponents: Record<string, React.ReactNode> = {
    title: (
      <h1 key="title" className="hidden sm:block text-xl font-bold text-gray-700 mb-2 ">
        {name}
      </h1>
    ),
    phone: (
      <div key="phone" className="flex items-start  ">
        <span className="text-[#505050] text-[13px] md:text-[16px] font-medium md:tracking-wider">P. {phone}</span>
      </div>
    ),
    email: (
      <div key="email" className="flex items-start  ">
        <span className="text-[#505050] text-[13px] md:text-[16px] font-medium md:tracking-wider">E. {email}</span>
      </div>
    ),
    address: (
      <div key="address" className="flex items-start mb-1 ">
        <div className="text-[#505050] text-[13px] md:text-[16px] font-medium md:tracking-wider">
          <div>{address}</div>
          {postal && <div>{postal}</div>}
        </div>
      </div>
    )
  };

  // Render content in the specified order
  return (
    <div className=" font-inter">
      {contentOrder.map(type => (
        <React.Fragment key={type}>
          {contentComponents[type]}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BranchCard;