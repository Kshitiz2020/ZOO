import Card from "../Components/Card";

const Animals = ({
  animalData,
  search,
  removeHandler,
  likesHandler,
  searchHandler,
}) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={searchHandler}
      />
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
      </div>
    </>
  );
};

export default Animals;
