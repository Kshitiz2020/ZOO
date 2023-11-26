import Card from "../Components/Card";
const Birds = ({ birdList, search, removeHandler, likesHandler }) => {
  return (
    <>
      <div className="birdsMap">
        {birdList
          .filter((bird) =>
            bird.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((bird) => (
            <Card
              key={bird.name}
              {...bird}
              removeHandler={() => removeHandler(bird.name)}
              removeLikesHandler={() => likesHandler(bird.name, "decrease")}
              addLikesHandler={() => likesHandler(bird.name, "increase")}
            />
          ))}
        <h1></h1>
      </div>
    </>
  );
};

export default Birds;
