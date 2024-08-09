import React, { useState } from "react";
import countriesIcon from "./../../assets/images/home/countries_icon.png";
import { regions } from "../../assets/data/website-data";

const CountrySection = () => {
  const [continent, setContinent] = useState(regions[0].continent);
  const [countries,setCountries] = useState(regions[0].countries)
  return (
    <div className="py-4 px-4 bg-primary text-white shadow-md">
      <div className="flex flex-col gap-4">
        <div className="flex gap-12 justify-center items-center p-4">
          <div>
            <img src={countriesIcon} />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-semibold">Countries</h2>
            <p>
              An overview of the countries of Europe, select the country of
              which you want to learn the traffic rules!
            </p>
          </div>
        </div>

        <div className="border-b-2"></div>

        <div className="grid grid-cols-3 gap-4">
          {regions.map((region) => (
            <div className="flex justify-center items-center p-4 cursor-pointer bg-white text-primary text-xl hover:text-slate-800 hover:opacity-80 hover:underline ">
              {region.continent}
            </div>
          ))}
        </div>

        <div className="bg-white text-primary p-8 flex flex-col gap-4">
            <h2 className="text-2xl">{continent}</h2>
            <hr/>
            <div className="grid grid-cols-3 gap-4">
                {
                    countries.map(country => (<div className="border-2 flex flex-col gap-4 justify-center items-center">
                        <h2>{country.name}</h2>
                        <img className="w-32 object-fill" src={country.flag} />
                    </div>))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default CountrySection;
