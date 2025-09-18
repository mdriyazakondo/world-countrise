import React, { use } from "react";

const DataFetch = ({ filterFetchData }) => {
  const data = use(filterFetchData);
  console.log(data);
  return <div></div>;
};

export default DataFetch;
