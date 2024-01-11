import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="aboutPage">
        <h1>This Page Reflects the About of ZOO application</h1>
        <h2>About</h2>
        <p className="brief">
          This is a page where you can find the variety of animals & birds
        </p>
        <p className="brief">
          Welcome to the exploration of the animals and birds .
        </p>
        <h3 className="functionTitle">Search and Know :</h3>
        <p className="brief">
          {" "}
          use the search bar and find the picture of the animala nad birds
        </p>

        <h3 className="functionTitle">Likes and Dislikes:</h3>
        <p className="brief">
          You can use like and dislike buttons to show your interest on
          particular birds or animals
        </p>

        <h3 className="functionTitle">Remove </h3>
        <p className="brief">
          You can click on remove handler and remove either of animals and birds
          , if you do not want to display. But we believe you will help to
          maintain ecosystem
        </p>
      </div>
    </>
  );
};

export default About;
