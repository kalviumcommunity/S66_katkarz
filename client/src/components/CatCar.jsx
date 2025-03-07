import React from "react"; // Ensure React is imported

const CatCar = ({ name, model, color, features = [] }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-100">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Model: {model}</p>
      <p>Color: {color}</p>
      <ul>
        {features.length > 0 ? (
          features.map((feature, index) => <li key={index}>🐱 {feature}</li>)
        ) : (
          <li>No special features</li>
        )}
      </ul>
    </div>
  );
};

export default CatCar;