import React from "react";
import AnimatedNumbers from "react-animated-numbers";
export const IstatisticItems = ({ detail, Icon }) => {
  return (
    <>
      <div className="flex flex-col col-span-2 w-44 lg:mr-10 whitespace-nowrap items-center justify-center text-darkThemeColor dark:text-white py-4 px-5">
        <div className="text-fcGreen mb-1 lg:mb-4 ">
          <Icon />
        </div>
        <div className="text-2xl lg:text-5xl font-josefin font-bold mb-2">
          
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: "spring",
              duration: index + 0.3,
            })}
            animateToNumber={detail.count}
           
          />
        </div>
        <div className="text-lg lg:text-2xl font-josefin">
          {detail.title}
        </div>
      </div>
    </>
  );
};
