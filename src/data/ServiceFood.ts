export interface Option {
    value: string;
    label: string;
  }
  
  export const businessOptions: Option[] = [
    { value: "Restaurant", label: "Restaurant" },
    { value: "Cafe", label: "Cafe" },
    { value: "Bar", label: "Bar" },
  ];
  
  export const regionOptions: Option[] = [
    { value: "Northland", label: "Northland" },
    { value: "Auckland", label: "Auckland" },
    { value: "Waikato", label: "Waikato" },
  ];
  
  export const slidesData = {
    title: "Is Service Foods For Me?",
    businessOptions,
    regionOptions,
  };
  