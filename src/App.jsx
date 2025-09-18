import React, { Suspense } from "react";
import Countrise from "./components/Countrise/Countrise";

const App = () => {
  const countrisePromise = fetch(
    "https://openapi.programming-hero.com/api/all"
  ).then((res) => res.json());
  return (
    <div>
      <Suspense fallback={<p>Loading.........</p>}>
        <Countrise countrisePromise={countrisePromise} />
      </Suspense>
    </div>
  );
};

export default App;
