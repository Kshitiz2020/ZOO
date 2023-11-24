import { Link } from "react-router-dom";

const Home = ({ search }) => {
  return (
    <>
      <div>{search}</div>
      <Link to="/animals">Animals</Link>
      <Link to="/birds">Birds</Link>
      <Link to="/about">About</Link>
    </>
  );
};

export default Home;
