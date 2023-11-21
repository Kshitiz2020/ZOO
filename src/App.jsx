import { useState } from "react";
import Card from "./Card";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import { animals } from "./animalsLists";

function App() {
  const [animalData, setAnimals] = useState(animals);
  // const [birdList, setBirds] = useState(birds);
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const removeHandler = (name) => {
    const updatedArray = animalData.filter(
      (animal) => animal.name !== setAnimals(updatedArray)
    );
  };

  return (
    <>
      <input type="text" placeholder="Search" onChange={searchHandler} />
      <Header name="Welcome To ZOO" />
      <main>
        <div className="animalsMap">
          {animalData
            .filter((animal) => animal.name.includes(search))
            .map((animal) => (
              <Card key={animal.name} {...animal} />
            ))}
          <h1></h1>
        </div>
      </main>

      <Footer copy="Thanks for visiting ZOO ! Have a  Nice Day" />
    </>
  );
}

export default App;
