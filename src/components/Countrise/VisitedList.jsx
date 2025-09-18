import React from "react";

const VisitedList = ({ visited }) => {
  // console.log(visited);
  return (
    <div>
      <h1> visited list :</h1>
      <img src={visited.flags.flags.png} alt="" />
    </div>
  );
};

export default VisitedList;
