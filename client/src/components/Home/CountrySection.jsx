import React, { useState } from "react";
import countriesIcon from "./../../assets/images/home/countries_icon.png";
import { regions } from "../../assets/data/website-data";
import closeIcon from "./../../assets/images/home/close-icon.svg";
import { Link } from "react-router-dom";

const CountrySection = () => {
  const [continent, setContinent] = useState(regions[0].continent);
  const [countries, setCountries] = useState(regions[0].countries);
  const [showCountries, setShowCountries] = useState(true);

  const handleRegionChange = (continentIndex) => {
    setContinent(regions[continentIndex].continent);
    setCountries(regions[continentIndex].countries);
  };
  if (showCountries) {
    return (
      <div className="py-4 px-4 bg-primary text-white shadow-md">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 justify-center items-center p-4">
            <div>
              <img className="w-16" src={countriesIcon} />
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {regions.map((region, index) => (
              <div
                onClick={() => handleRegionChange(index)}
                className={`flex justify-center items-center p-4 cursor-pointer border-2 ${
                  region.continent == continent
                    ? "bg-primary border-primary-light text-white hover:bg-sky-800"
                    : "bg-white border-slate-200 text-primary hover:text-slate-800"
                } text-primary text-xl  hover:opacity-80 hover:underline`}
              >
                {region.continent}
              </div>
            ))}
          </div>

          <div className="bg-white text-primary p-8 flex flex-col gap-4">
            <h2 className="text-2xl">{continent}</h2>
            <hr />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {countries.map((country) => (
                <Link to={country.name}>
                  <div className="border-2 flex flex-col gap-4 p-4 justify-center items-center hover:bg-gray-200">
                    <h2>{country.name}</h2>
                    <img
                      className="w-32 h-28 object-contain"
                      src={country.flag}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end py-4">
          <button onClick={() => setShowCountries(false)} className="">
            Close <img className="inline" width={24} src={closeIcon} />{" "}
          </button>
        </div>
      </div>
    );
  }
};

export default CountrySection;
