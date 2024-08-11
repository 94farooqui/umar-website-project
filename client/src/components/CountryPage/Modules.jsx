import React from "react";
import { CountryPageData } from "./../../assets/data/website-data";
import { Link } from "react-router-dom";

const Modules = () => {
  const { moduleSection } = CountryPageData;
  return (
    <div className="w-full p-8 bg-white grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-4">
      {moduleSection.modules.map((module) => (
        <div className="flex flex-col gap-4 p-8 items-center justify-center bg-gray-100 border border-slate-300">
          <img width={120} className="" src={module.moduleIcon} />
          <Link to='practice-test'><h4 className="text-2xl text-primary hover:underline">{module.moduleTitle}</h4></Link>
          <p>{module.moduleDescription}</p>
        </div>
      ))}
    </div>
  );
};

export default Modules;
