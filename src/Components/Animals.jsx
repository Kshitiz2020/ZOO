import { animals } from "../animalsLists";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";
import React, { useState } from "react";

export default function Animals() {
  const [animalData, setAnimals] = useState(animals);
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") ?? ""; // value we get from searchParams

  const filteredAnimals = animalData.filter((animal) =>
    animal.name.toLowerCase().includes(name?.toLowerCase())
  );

  const removeHandler = (name, type) => {
    if (type === "animal") {
      // Filter out the animal with the given name
      const updatedAnimals = animalData.filter(
        (animal) => animal.name !== name
      );
      // Set the state with the updated list of animals
      setAnimals(updatedAnimals);
      console.log("Animal removed:", name);
    }
  };

  const animalLikesHandler = (name, action) => {
    const updatedArray = animalData.map((animal) => {
      if (animal.name === name) {
        if (action === "increase") {
          return { ...animal, likes: animal.likes + 1 };
        } else if (action === "decrease") {
          return { ...animal, likes: animal.likes - 1 };
        }
      }
      return animal;
    });
    setAnimals(updatedArray);
  };

  return (
    <div className="cards-wrapper">
      {filteredAnimals.map((animal, idx) => (
        <div key={idx}>
          <Card
            {...animal}
            removeHandler={() => removeHandler(animal.name, "animal")}
            removeLikesHandler={() =>
              animalLikesHandler(animal.name, "decrease")
            }
            addLikesHandler={() => animalLikesHandler(animal.name, "increase")}
          />
        </div>
      ))}
    </div>
  );
}
