import { FaGooglePlay, FaApple } from "react-icons/fa";
import Button from "../Button"; 

const StoreButtons = () => {
  const buttons = {
    googlePlay: {
      text: "Google Play",
      icon: <FaGooglePlay color="#34A853" />,
      bgColor: "bg-black",
      textColor: "text-white",
      className: "px-2 md:px-7 text-xs md:text-[18px] py-1 md:py-2 border border-white",
    },
    appStore: {
      text: "App Store",
      icon: <FaApple />,
      bgColor: "bg-black",
      textColor: "text-white",
      className: "px-2 md:px-7 text-xs md:text-[18px] py-1 md:py-2 border border-white",
    },
  };

  return (
    <div className="absolute bottom-12 md:bottom-10 md:right-12 -left-12 right-6 md:left-auto flex flex-row space-x-3 md:space-x-3 justify-center md:justify-end">
      <Button {...buttons.googlePlay} />
      <Button {...buttons.appStore} />
    </div>
  );
};

export default StoreButtons;
