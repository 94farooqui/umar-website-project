import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CountryPageData } from "./../../assets/data/website-data";
import { CountryImages } from "./../../assets/data/website-data";
import checkMark from "./../../assets/images/home/check-mark.svg";

const CountryHeroSection = () => {
  const params = useParams();
  const country = params.country;

  const { heroSection, moduleSection } = CountryPageData;
  const { heroTitle, heroDescription, heroBullets } = heroSection;
  const { modules } = moduleSection;
  const [countryImage,setCountyImage] = useState()
 
  useEffect(()=>{
    CountryImages.find((countryImage) => {
        if (country == countryImage.name) {
           setCountyImage(countryImage.flag)
        }
      });
  },[])
  return (
    <div className="w-full  bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-8 sm:flex-row sm:justify-between py-12 px-4">
      <div className="sm:w-3/4 flex flex-col gap-4 pr-12">
        <h1 className="text-xl font-semibold text-primary sm:text-[40px]">
          {heroTitle} {country}{" "}
        </h1>
        <p className="text-md sm:text-xl">{heroDescription}</p>
        <hr className="my-4" />
        <div className="flex flex-col sm:flex-row sm:gap-8">
          <ul className="sm:text-lg flex flex-col gap-2">
            {heroBullets.map((point, index) => {
              if (index < 3) {
                return (
                  <li className="flex items-center gap-2">
                    <img className="" width={24} src={checkMark} />
                    {point}
                  </li>
                );
              }
            })}
          </ul>
          <ul className="sm:text-lg flex flex-col gap-2">
            {heroBullets.map((point, index) => {
              if (index > 2) {
                return (
                  <li className="flex items-center gap-2">
                    <img className="" width={24} src={checkMark} />
                    {point}
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </div>
      {countryImage && <div className="sm:w-1/4">
        <img className="w-32 sm:w-48" src={countryImage} />
      </div>}
      </div>
    </div>
  );
};

export default CountryHeroSection;
