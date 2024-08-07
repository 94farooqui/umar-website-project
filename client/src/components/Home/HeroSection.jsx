import React from "react";
import { hero } from "../../assets/data/website-data";
import checkMark from './../../assets/images/home/check-mark.svg'
const HeroSection = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row py-4 px-4 bg-white shadow-md">
      <div className="sm:w-3/4 flex flex-col gap-2 pr-12">
        <h1 className="text-[40px]">{hero.title}</h1>
        <p className="text-xl">{hero.text}</p>
        <hr className="my-4" />
        <div className="flex flex-col sm:flex-row sm:gap-8">
          <ul className="text-lg flex flex-col gap-2">
            {hero.bulletpoints.map((point, index) => {
              if (index < 4) {
                return <li className="flex items-center gap-2"><img className="" width={24} src={checkMark}/>{point}</li>;
              }
            })}
          </ul>
          <ul className="text-lg flex flex-col gap-2">
            {hero.bulletpoints.map((point, index) => {
              if (index > 3) {
                return <li className="flex items-center gap-2"><img className="" width={24} src={checkMark}/>{point}</li>;
              }
            })}
          </ul>
        </div>
      </div>
      <div className="sm:w-1/4">
        <img src={hero.heroIamge}/>
      </div>
    </div>
  );
};

export default HeroSection;
