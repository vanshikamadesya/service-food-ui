import accountIcon from "../../assets/images/account.png";
import tradeIcon from "../../assets/images/trade.png";
import benefitsIcon from "../../assets/images/benefit.png";
import Button from "../Button";

const Icon = () => {
  return (
    <div>
      <div className="bg-[#EFEBE7] py-16 px-6 sm:px-8">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl md:text-[39px] font-bold mb-20 text-gray-900">
            Let's take your business to the next level
          </h2>

          <div className="flex flex-col sm:flex-row justify-center tracking-normal gap-8 text-center ">
            {/* Trade Account */}
            <div className="flex flex-col items-center max-w-xs">
              <img src={tradeIcon} alt="Trade Account" className="w-14 h-14 mb-4" />
              <p className="text-gray-700">
                You need a trade acconut to order from Service Foods consectetuer adipiscing elit, sed diam nonummelit, sed diam nonummy nibh euismod tincidunt ut laoree volutpat.
              </p>
            </div>

            <div className="hidden sm:flex h-40 mt-10 border-l-2 border-gray-500"></div>

            {/* Account Creation */}
            <div className="flex flex-col items-center max-w-xs">
              <img src={accountIcon} alt="Account Creation" className="w-14 h-14 mb-4" />
              <p className="text-gray-700">
                Short overview on how our account creation process works onsectetuer adipiscing elit, sed diam nonummy nibh eolore magna aliquam erat volutpat.
              </p>
            </div>

            <div className="hidden sm:flex h-40 mt-10 border-l-2 border-gray-500"></div>

            {/* Customer Benefits */}
            <div className="flex flex-col items-center max-w-xs">
              <img src={benefitsIcon} alt="Customer Benefits" className="w-14 h-14 mb-4" />
              <p className="text-gray-700">
                Our customers enjoy a wide range of benefits onsectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
          </div>

          {/* Create Account Button */}
          <Button text="Create Account" bgColor="bg-[#7B5F3D]" textColor="text-white" className="mt-10 hover:bg-[#5F472D] px-14 py-2 text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Icon;
