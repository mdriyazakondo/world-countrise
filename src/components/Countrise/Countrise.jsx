import React, { use, useState } from "react";
import Countiry from "./Countiry";
import VisitedList from "./VisitedList";
const Countrise = ({ countrisePromise }) => {
  const countriseData = use(countrisePromise);
  const countries = countriseData.countries;

  const [isShearch, setIsShearch] = useState(countries);

  const [visitedCountrise, setVisitedCountrise] = useState([]);

  const handleVisitedCountrise = (country) => {
    const newVisitedCountrise = [...visitedCountrise, country];
    setVisitedCountrise(newVisitedCountrise);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const shearch = e.target.value;
    const shrechData = countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(shearch) ||
        country.continents.continents[0].toLowerCase().includes(shearch)
    );
    setIsShearch(shrechData);
  };

  return (
    <div className="max-w-[1800px] mx-auto">
      <h2 className="py-4 text-2xl font-semibold text-gray-600 text-center">
        All Country ({isShearch.length})
      </h2>
      {/* <div>
        {visitedCountrise.map((visited, index) =>
          // console.log(visited)
          <VisitedList key={index} visited={visited} />
        )}
      </div> */}
      <p className="text-xl font-medium text-center text-gray-600">
        Total Countrise Visited: {visitedCountrise.length}
      </p>
      <div className="w-2/4 mx-auto">
        <input
          type="text"
          onChange={handleChange}
          placeholder="shearch......"
          className="w-full py-1.5 pl-4 border border-gray-400 rounded-md outline-none my-4"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {isShearch.map((country, index) => (
          <Countiry
            key={index}
            id={country}
            country={country}
            handleVisitedCountrise={handleVisitedCountrise}
          />
        ))}
      </div>
    </div>
  );
};

export default Countrise;
