
const LoremText = () => {
    return (
      <div>
        <div className="bg-[#efebe7] py-16 px-6 sm:px-8 relative">
          <div className="max-w-screen-lg mx-auto text-center w-full">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-14 font-sans">
              Is Service Foods For Me?
            </h2>
  
            {/* Input Fields with Dropdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 justify-center">
              {/* Business Type Dropdown */}
              <div className="flex flex-col text-left max-w-[450px] w-full mx-auto">
                <label
                  htmlFor="businessType"
                  className="text-lg sm:text-xl mb-2 sm:mb-3 font-sans font-medium text-[#666666]"
                >
                  My business is:
                </label>
                <select
                  id="businessType"
                  className="p-2 sm:pl-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-gray-500 w-full mt-2 appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    (Select an option)
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
  
              {/* Region Dropdown */}
              <div className="flex flex-col text-left max-w-[450px] w-full mx-auto">
                <label
                  htmlFor="region"
                  className="text-lg sm:text-xl mb-2 sm:mb-3 font-sans font-medium text-[#666666]"
                >
                  My region is:
                </label>
                <select
                  id="region"
                  className="p-2 sm:pl-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 text-gray-500 w-full mt-2 appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    (Select an option)
                  </option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                </select>
              </div>
            </div>
  
            {/* Lorem Ipsum Text */}
            <div className="max-w-[900px] mx-auto mt-8 text-left px-4 sm:px-0">
              <p className="mt-12 text-lg font-medium text-gray-800 font-sans tracking-wider px-9">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                no.
              </p>
              <p className="text-gray-800 italic font-medium mt-4 sm:mt-6 text-lg sm:text-xl tracking-wide">
                "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat."
              </p>
            </div>
  
            {/* Café Name */}
            <div className="mt-8 text-lg sm:text-xl text-gray-400 text-center sm:text-right">
              <span>- Cafe in the Waikato region</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LoremText;
  