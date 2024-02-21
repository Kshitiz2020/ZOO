import { birds } from "../animalsLists";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";
import React, { useState } from "react";

export default function Birds() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name") ?? ""; // value we get from searchParams
  const [birdList, setBirds] = useState(birds);

  const filteredBirds = birdList.filter((bird) =>
    bird.name.toLowerCase().includes(name?.toLowerCase())
  );

  const removeHandler = (name, type) => {
    if (type === "bird") {
      // Filter out the bird with the given name
      const updatedBirds = birdList.filter((bird) => bird.name !== name);
      // Set the state with the updated list of birds
      setBirds(updatedBirds);
    }
  };

  const birdLikesHandler = (name, action) => {
    const updatedArray = birdList.map((bird) => {
      if (bird.name === name) {
        if (action === "increase") {
          return { ...bird, likes: bird.likes + 1 };
        } else if (action === "decrease") {
          return { ...bird, likes: bird.likes - 1 };
        }
      }
      return bird;
    });
    setBirds(updatedArray);
  };

  return (
    <>
      <div className="cards-wrapper">
        {filteredBirds.map((bird, idx) => (
          <div key={idx}>
            <Card
              {...bird}
              removeHandler={() => removeHandler(bird.name, "bird")}
              removeLikesHandler={() => birdLikesHandler(bird.name, "decrease")}
              addLikesHandler={() => birdLikesHandler(bird.name, "increase")}
            />
          </div>
        ))}
      </div>
    </>
  );
}
