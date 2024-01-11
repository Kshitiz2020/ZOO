import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="frontImage">
        <Link to="/animals">
          <img
            className="img"
            src={`https://source.unsplash.com/400x400/?fox`}
            style={{ height: "auto" }}
          />
        </Link>
        <Link to="/birds">
          <img
            className="img"
            src={`https://source.unsplash.com/400x400/?parrot`}
            style={{ height: "auto" }}
          />
        </Link>
      </div>
    </>
  );
};

export default Home;
