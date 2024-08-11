import React from "react";
import { hero } from "../../assets/data/website-data";
import checkMark from './../../assets/images/home/check-mark.svg'
const HeroSection = () => {
  return (
    <div className="w-full flex flex-col gap-8 sm:flex-row py-4 px-4 mx-2 bg-white shadow-md">
      <div className="sm:w-3/4 flex flex-col gap-2 pr-12">
        <h1 className="text-lg font-bold text-primary sm:text-[40px]">{hero.title}</h1>
        <p className="sm:text-xl">{hero.text}</p>
        <hr className="my-4" />
        <div className="flex flex-col sm:flex-row sm:gap-8">
          <ul className="sm:text-lg flex flex-col gap-2">
            {hero.bulletpoints.map((point, index) => {
              if (index < 4) {
                return <li className="flex items-center gap-2"><img className="" width={24} src={checkMark}/>{point}</li>;
              }
            })}
          </ul>
          <ul className="sm:text-lg flex flex-col gap-2">
            {hero.bulletpoints.map((point, index) => {
              if (index > 3) {
                return <li className="flex items-center gap-2"><img className="" width={24} src={checkMark}/>{point}</li>;
              }
            })}
          </ul>
        </div>
      </div>
      <div className="mx-auto sm:w-1/4">
        <img className="w-36" src={hero.heroIamge}/>
      </div>
    </div>
  );
};

export default HeroSection;
