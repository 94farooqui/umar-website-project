import React from "react";
import { CountryPageData } from "./../../assets/data/website-data";

const TopBar = () => {
  const { moduleSection } = CountryPageData;
  return (
    <div className="w-full bg-primary p-2">
      <div className="max-w-[1200px] mx-auto flex justify-center gap-8">
        {moduleSection.modules.map((module) => (
          <div className="flex gap-2 items-center text-white">
            <img className="w-12 h-12 object-contain" src={module.moduleIcon} />
            <p className="">{module.moduleTitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBar;
