import React from "react";

const Countiry = ({ country }) => {
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
          Area: {country.area.area}{" "}
          {country.area.area > 300000 ? "Big Country" : "Small Country"}
        </p>
      </div>
    </div>
  );
};

export default Countiry;
