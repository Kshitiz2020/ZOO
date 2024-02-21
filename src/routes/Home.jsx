import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="front-image">
        <div className="animal-img">
          <Link to="/animals">
            <img
              className="img "
              src={`https://source.unsplash.com/400x400/?fox`}
              style={{ height: "auto" }}
            />
          </Link>
        </div>

        <div className="birds-img">
          <Link to="/birds">
            <img
              className="img"
              src={`https://source.unsplash.com/400x400/?parrot`}
              style={{ height: "auto" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
