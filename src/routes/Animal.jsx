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
      <h1 className="heading">Animals</h1>
      <div className="searchBar">
        <input
          className="searchBar"
          type="text"
          placeholder="Search"
          value={search}
          onChange={searchHandler}
        />
      </div>

      <div className="animalsMap">
        {animalData
          .filter((animal) => animal.name.includes(search))
          .map((animal) => (
            <Card
              key={animal.name}
              {...animal}
              removeHandler={() => removeHandler(animal.name, "animal")}
              removeLikesHandler={() =>
                likesHandler(animal.name, "animal", "decrease")
              }
              addLikesHandler={() =>
                likesHandler(animal.name, "animal", "increase")
              }
            />
          ))}
      </div>
    </>
  );
};

export default Animals;
