import React, { useState } from "react";
import { Link } from "react-router-dom";

const Countiry = ({ id, country, handleVisitedCountrise }) => {
  // const {
  //   name,
  //   ccn3,
  //   currencies,
  //   capital,
  //   region,
  //   languages,
  //   area,
  //   cca3,
  //   population,
  //   continents,
  //   flags,
  // } = country;

  // const { common, official } = name;
  // const { ccn3 } = ccn3;
  // const { common, official } = currencies;
  // const { common, official } = capital;
  // const { common, official } = region;
  // const { common, official } = languages;
  // const { common, official } = area;
  // const { common, official } = cca3;
  // const { common, official } = population;
  // const { common, official } = continents;
  // const { common, official } = flags;

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    if (!visited) {
      setVisited(true);
      handleVisitedCountrise(country);
    }
  };

  return (
    <div>
      <div className="p-4 shadow bg-gray-100">
        <img
          className="h-[200px] w-full p-4"
          src={country.flags.flags.png}
          alt=""
        />

        <h4 className="text-xl font-semibold">{country.name.common}</h4>
        <p>
          Area: {country.area.area}
          {country.area.area > 300000 ? " Big Country" : " Small Country"}
        </p>
        <div className="flex items-center gap-4 justify-between">
          <button className="py-1.5 bg-green-500  px-6 rounded-md mt-9 cursor-pointer text-white">
            <Link to={`/country/${id}`}>Show Detalis...</Link>
          </button>
          <button
            onClick={handleVisited}
            className="py-1.5 bg-green-500  px-6 rounded-md mt-9 cursor-pointer text-white"
          >
            {visited ? "Visited" : "Not Visited"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Countiry;
