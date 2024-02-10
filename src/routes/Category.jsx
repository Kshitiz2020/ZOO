import Animals from "../Components/Animals";
import Birds from "../Components/Birds";
import Card from "../Components/Card";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ErrorPage from "./Error-page";

const Category = ({
  searchHandler,
  removeHandle,
  likesHandler,
  search,
  birdList,
  animalData,
}) => {
  // const [animalData, setAnimals] = useState();
  // const [birdList, setBirds] = useState();
  // const [search, setSearch] = useState("");

  // const searchHandler = (e) => {
  //   setSearch(e.target.value);
  // };

  // const removeHandler = (name, type) => {
  //   if (type === "animal") {
  //     const updatedArray = animalData.filter((animal) => animal.name !== name);
  //     setAnimals(updatedArray);
  //   } else {
  //     const birdsUpdatedArray = birdList.filter((bird) => bird.name !== name);
  //     setBirds(birdsUpdatedArray);
  //   }
  // };

  // const likesHandler = (name, type, action) => {
  //   // check is it bird or animal and do if statement for each
  //   if (type === "animal") {
  //     const updatedArray = animalData.map((animal) => {
  //       if (animal.name === name) {
  //         if (action === "increase") {
  //           return { ...animal, likes: animal.likes + 1 };
  //         } else {
  //           return { ...animal, likes: animal.likes - 1 };
  //         }
  //       } else {
  //         return animal;
  //       }
  //     });
  //     setAnimals(updatedArray);
  //   } else {
  //     const updatedArray = birdList.map((bird) => {
  //       if (bird.name === name) {
  //         if (action === "increase") {
  //           return { ...bird, likes: bird.likes + 1 };
  //         } else {
  //           return { ...bird, likes: bird.likes - 1 };
  //         }
  //       } else {
  //         return bird;
  //       }
  //     });
  //     setBirds(updatedArray);
  //   }
  //};
  const { category } = useParams();

  if (category === "birds") {
    return (
      <Birds
        searchHandler={searchHandler}
        //removeHandler={removeHandler}
        likesHandler={likesHandler}
        search={search}
        birdList={birdList}
        animalData={animalData}
      />
    );
  } else if (category === "animals") {
    return <Animals />;
  } else {
    return <ErrorPage />;
  }
};
export default Category;
