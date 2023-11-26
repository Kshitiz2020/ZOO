import Card from "../Components/Card";

const Animals = ({ animalData, search, removeHandler, likesHandler }) => {
  return (
    <div className="animalsMap">
      {animalData
        .filter((animal) => animal.name.includes(search))
        .map((animal) => (
          <Card
            key={animal.name}
            {...animal}
            removeHandler={() => removeHandler(animal.name)}
            removeLikesHandler={() => likesHandler(animal.name, "decrease")}
            addLikesHandler={() => likesHandler(animal.name, "increase")}
          />
        ))}
      <h1></h1>
    </div>
  );
};

export default Animals;
