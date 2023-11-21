import image from "./assets/butterfly.jpg";

const Card = ({ name, likes }) => {
  const addLikes = () => {
    setlikes(likes + 1);
  };
  const removeLikes = () => {
    setlikes(likes - 1);
  };

  return (
    <>
      <div className="cardsOfAnimals">
        <button className="close-btn">
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="butterfly">
          <img src={`https://source.unsplash.com/400x400/?${name}`}></img>
          <h1>{name}</h1>
        </div>

        <div className="reaction">
          <button onClick={addLikes}>
            <span className="material-symbols-outlined">heart_plus</span>
          </button>
          <div className="likes-container">
            <p className="likes">{likes}</p>
            <span className="material-icons">
              {likes >= 0 ? "favorite" : "heart_broken"}
            </span>
          </div>
          <button onClick={removeLikes}>
            <span className="material-symbols-outlined">heart_minus</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
