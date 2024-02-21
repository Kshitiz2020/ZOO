import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="aboutPage">
        <h1 className="mb-2rem">
          This Page Reflects the About of ZOO application
        </h1>

        <h2>About</h2>

        <p className="brief">
          This is a page where you can find the variety of animals & birds
        </p>

        <p className="brief">
          Welcome to the exploration of the animals and birds .
        </p>

        <div className="what-i-learnt">
          <h3 className="functionTitle">Search Handle</h3>
          <p className="brief">
            I have learnt to create the search handler and pass as props on
            animals and birds which helps to search the animals and birds with
            their name.
          </p>
        </div>

        <div className="what-i-learnt">
          <h3 className="functionTitle">Likes and Dislikes:</h3>
          <p className="brief">
            Created the Likes and Dislikes handler to like and dislike the
            picture of animals and birds
          </p>
        </div>

        <div className="what-i-learnt">
          <h3 className="functionTitle">Remove </h3>
          <p className="brief">
            You can click on remove handler and remove either of animals and
            birds , if you do not want to display. But we believe you will help
            to maintain ecosystem
          </p>
        </div>

        <div className="what-i-learnt">
          <h3 className="functionTitle">Routes </h3>
          <p className="brief">
            I have learnt how to use route components and develop the SPA on
            this project.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
