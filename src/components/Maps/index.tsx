import React from "react";
import Maps from "./Maps";

const MapsModule: React.FC = () => {
  // Set the content order for both main components and branch card elements
  return <Maps contentOrder={{
    main: [  "selector","image", "info"],
    card: ["title", "phone","email", "address"]
  }} />;
};

export default MapsModule;
