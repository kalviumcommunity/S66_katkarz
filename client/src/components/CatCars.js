const CatCar = ({ name, model, color, features }) => {
    return (
      <div className="p-4 border rounded-lg shadow-md bg-gray-100">
        <h2 className="text-xl font-bold">{name}</h2>
        <p>Model: {model}</p>
        <p>Color: {color}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>🐱 {feature}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default CatCar;