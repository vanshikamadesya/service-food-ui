import foodserviceMaps from "../assets/images/ContactUs/foodserviceMaps.png"; // ✅ Correct way




export interface BranchInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  postal: string;
  image?: string;
  location: {
    name: string;
    rating: number;
    reviewCount: number;
    address: string;
    status: string;
    openingTime: string;
  };
}

export const branches = [
  "HAMILTON PRODUCE",
  "CHRISTCHURCH/CANTERBURY",
  "AUCKLAND FOODSERVICE",
  "TARANAKI",
  "GREYMOUTH",
];

export const branchData: Record<string, BranchInfo> = {
  "HAMILTON PRODUCE": {
    name: "HAMILTON PRODUCE",
    phone: "+64 (07) 849 3660",
    email: "hamilton@servicefoods.co.nz",
    address: "56 The Boulevard, Te Rapa, Hamilton",
    postal: "PO Box 123, Hamilton",
    image: undefined,
    location: {
      name: "Service Foods - Hamilton",
      rating: 4.5,
      reviewCount: 12,
      address: "56 The Boulevard, Te Rapa",
      status: "Open",
      openingTime: "Closes 6pm",
    },
  },
  "CHRISTCHURCH/CANTERBURY": {
    name: "CHRISTCHURCH/CANTERBURY",
    phone: "+64 (03) 348 3660",
    email: "christchurch@servicefoods.co.nz",
    address: "24 Edmonton Road, Hornby, Christchurch",
    postal: "PO Box 456, Christchurch",
    image: undefined,
    location: {
      name: "Service Foods - Christchurch",
      rating: 4.6,
      reviewCount: 8,
      address: "24 Edmonton Road, Hornby",
      status: "Closed",
      openingTime: "Opens 5am Wed",
    },
  },
  "AUCKLAND FOODSERVICE": {
    name: "AUCKLAND FOODSERVICE",
    phone: "+64 (09) 258 5010",
    email: "EOrdersAKL@servicefoods.co.nz",
    address: "221 Ihumatao Road, Mangere, Auckland",
    postal: "PO Box 53050, Auckland Airport, Mangere",
    image: foodserviceMaps,
    location: {
      name: "Service Foods - Auckland",
      rating: 4.7,
      reviewCount: 9,
      address: "221 Ihumatao Road, Mangere",
      status: "Closed",
      openingTime: "Opens 4am Wed",
    },
  },
  "TARANAKI": {
    name: "TARANAKI",
    phone: "+64 (06) 758 4330",
    email: "taranaki@servicefoods.co.nz",
    address: "32 Devon Street, New Plymouth",
    postal: "PO Box 789, New Plymouth",
    image: undefined,
    location: {
      name: "Service Foods - Taranaki",
      rating: 4.3,
      reviewCount: 6,
      address: "32 Devon Street, New Plymouth",
      status: "Open",
      openingTime: "Closes 7pm",
    },
  },
  "GREYMOUTH": {
    name: "GREYMOUTH",
    phone: "+64 (03) 768 9870",
    email: "greymouth@servicefoods.co.nz",
    address: "14 Boundary Street, Greymouth",
    postal: "PO Box 321, Greymouth",
    image: undefined,
    location: {
      name: "Service Foods - Greymouth",
      rating: 4.2,
      reviewCount: 5,
      address: "14 Boundary Street, Greymouth",
      status: "Closed",
      openingTime: "Opens 6am Wed",
    },
  },
};
