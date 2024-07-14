import React from "react";

const HeaderandLineinHomePage = ({ title }) => {
  return (
    <div>
      <div className="flex flex-row items-center justify-center mb-5 pt-5">
        <div
          className={`w-4 md:w-20 lg:w-40  border-t-[6px] ml-8 border-black slice-in-left-line`}
        ></div>
        <h2
          className={`font-bold mx-4 text-2xl md:text-4xl md:mx-8 animate-fadeIn`}
        >
          {title}
        </h2>
        <div
          className={`flex-grow border-t-[6px] mr-8 border-black slice-in-right-line `}
        ></div>
      </div>
    </div>
  );
};

export default HeaderandLineinHomePage;
