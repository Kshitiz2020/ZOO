const Card = ({
  name,
  likes,
  addLikesHandler,
  removeLikesHandler,
  removeHandler,
}) => {
  return (
    <div className="card-container">
      <div className="card">
        <div className="close">
          <button
            className="close-btn"
            onClick={() => {
              removeHandler();
            }}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div>
          <img
            className="card-image"
            src={`https://source.unsplash.com/400x400/?${name}`}
          ></img>
        </div>
        <div>
          <h1 className="name-heading">{name}</h1>
        </div>
        <div className="reaction-container">
          <div className="love-reaction">
            <button onClick={addLikesHandler}>
              <span className="material-symbols-outlined">heart_plus</span>
              <span className="material-icons"></span>
            </button>

            <span className="likes">{likes}</span>

            <button onClick={removeLikesHandler}>
              <span className="material-symbols-outlined">heart_minus</span>
            </button>
          </div>

          {/*  <div className="broken-heart"></div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
