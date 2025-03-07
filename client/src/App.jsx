import React from "react";
import CatCar from "./components/CatCar";

function App() {
  const dummyCar = {
    name: "Whisker Wagon",
    model: "MeowMobile X1",
    color: "Orange Stripes",
    features: ["Tail Spoiler", "Paw Brakes", "Meow Horn"],
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold">Welcome to If Cats Could Drive</h1>
      <p className="text-lg text-gray-700 my-4">
        Design custom cat-mobiles and explore a whimsical world of feline-inspired cars!
      </p>
      
      {/* Render the CatCar component */}
      <div className="flex justify-center">
        <CatCar {...dummyCar} />
      </div>
    </div>
  );
}

export default App;