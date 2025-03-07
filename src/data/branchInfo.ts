import foodserviceMaps from "../assets/images/ContactUs/foodserviceMaps.png"; // ✅ Correct way

export interface BranchInfo {
  name: string;
  phone: string;
  email: string;
  address: string;
  postal?: string;
  image?: string;
}

export const branches = [
  "NATIONAL SUPPORT OFFICE",
  "HAMILTON PRODUCE",
  "AUCKLAND FOODSERVICE",
  "CHRISTCHURCH/CANTERBURY",
  "TARANAKI",
  "AUCKLAND IMPORTS",
  "NAPIER/HAWKES BAY",
  "WESTPORT",
  "AUCKLAND REPACKS",
  "WELLINGTON (TE PĀTAKA)",
  "GISBORNE/TAIRAWHITI",
  "AUCKLAND LEONARD'S"
];

export const branchData: Record<string, BranchInfo> = {
  "NATIONAL SUPPORT OFFICE": {
    name: "NATIONAL SUPPORT OFFICE",
    phone: "+64 (09) 258 5010",
    email: "OrdersAKL@servicefoods.co.nz",
    address: "221 Ihumātao Road, Māngere, Auckland",
    postal: "PO Box: 53050, Auckland Airport, Māngere",
    image: foodserviceMaps,
  },
  "HAMILTON PRODUCE": {
    name: "HAMILTON PRODUCE",
    phone: "+64 (07) 981 2258",
    email: "OrdersHAM@servicefoods.co.nz",
    address: "36 Horotiu Road, Hamilton",
    image: foodserviceMaps,
  },
  "AUCKLAND FOODSERVICE": {
    name: "AUCKLAND FOODSERVICE",
    phone: "+64 (09) 258 5010",
    email: "OrdersAKL@servicefoods.co.nz",
    address: "221 Ihumātao Road, Māngere, Auckland",
    postal: "PO Box: 53050, Auckland Airport, Māngere",
    image: foodserviceMaps,
  },
  "CHRISTCHURCH/CANTERBURY": {
    name: "CHRISTCHURCH/CANTERBURY",
    phone: "+64 (03) 389 9909",
    email: "OrdersCH@servicefoods.co.nz",
    address: "220 Cumnor Terrace, Woolston, Christchurch",
    postal: "PO Box: 7005, Sydenham, Christchurch",
    image: foodserviceMaps,
  },
  "TARANAKI": {
    name: "TARANAKI",
    phone: "+64 (06) 753 6107",
    email: "OrdersTARA@servicefoods.co.nz",
    address: "14 Saltash Street, Vogeltown, New Plymouth",
    image: foodserviceMaps,
  },
  "AUCKLAND IMPORTS": {
    name: "AUCKLAND IMPORTS",
    phone: "+64 (09) 280 3100",
    email: "OrdersAKL@servicefoods.co.nz",
    address: "25 Aerovista Place, Wiri, Auckland",
    postal: "PO Box: 53050, Auckland Airport, Māngere",
    image: foodserviceMaps,
  },
  "NAPIER/HAWKES BAY": {
    name: "NAPIER/HAWKES BAY",
    phone: "+64 (06) 843 7779",
    email: "OrdersNP@servicefoods.co.nz",
    address: "12 Turner Place, Onekawa, Napier",
    image: foodserviceMaps,
  },
  "WESTPORT": {
    name: "WESTPORT",
    phone: "+64 (03) 789 7577",
    email: "OrdersWP@servicefoods.co.nz",
    address: "15 Bentham Street, Westport",
    image: foodserviceMaps,
  },
  "AUCKLAND REPACKS": {
    name: "AUCKLAND REPACKS",
    phone: "+64 (09) 280 3100",
    email: "OrdersAKL@servicefoods.co.nz",
    address: "18D Aerovista Place, Wiri, Auckland",
    postal: "PO Box: 53050, Auckland Airport, Māngere",
    image: foodserviceMaps,
  },
  "WELLINGTON (TE PĀTAKA)": {
    name: "WELLINGTON (TE PĀTAKA)",
    phone: "+64 (04) 586 2162",
    email: "OrdersWN@servicefoods.co.nz",
    address: "19 William Durant Drive, Upper Hutt, Wellington",
    image: foodserviceMaps,
  },
  "GISBORNE/TAIRAWHITI": {
    name: "GISBORNE/TAIRAWHITI",
    phone: "+64 (06) 867 3599",
    email: "OrdersGB@servicefoods.co.nz",
    address: "21 Parkinson Street, Awapuni, Gisborne",
    image: foodserviceMaps,
  },
  "AUCKLAND LEONARD'S": {
    name: "AUCKLAND LEONARD'S",
    phone: "0800 SAUSAGE (728 724)",
    email: "Orders@leonards.co.nz",
    address: "46 Greenmount Drive, East Tamaki, Auckland",
    image: foodserviceMaps,
  },
  "GREYMOUTH": {
    name: "GREYMOUTH",
    phone: "+64 (03) 768 7143",
    email: "OrdersGM@servicefoods.co.nz",
    address: "68 Alexander Street, Greymouth",
    image: foodserviceMaps,
  }
};
