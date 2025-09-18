import { Suspense } from "react";
import { useParams } from "react-router-dom";
import DataFetch from "./DataFetch";

const FilterCountry = () => {
  const { id } = useParams();

  console.log(id);
  // const filterFetchData = fetch(
  //   `https://openapi.programming-hero.com/api/country/${id}`
  // );
  return (
    <div>
      {/* <Suspense fallback={<p>Loading.....</p>}>
        <DataFetch filterFetchData={filterFetchData} />
      </Suspense> */}
      hello
    </div>
  );
};

export default FilterCountry;
