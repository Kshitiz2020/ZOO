import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./routes/Home";
// import Animals from "./routes/Animal";
// import Birds from "./routes/Birds";
import About from "./routes/About";
import { animals, birds } from "./animalsLists";
import ErrorPage from "./routes/Error-page";
import Root from "./routes/Root";
import Card from "./Components/Card";

import "./CSS/Cards.css";
import "./CSS/index.css";
import Category from "./routes/Category";

const App = () => {
  // const [animalData, setAnimals] = useState(animals);
  // const [birdList, setBirds] = useState(birds);
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
  // };

  // Define the router outside the return statement
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /* searchHandler={searchHandler} */ /> },
        /* {
          path: "/animals",
          element: (
            <Animals
               searchHandler={searchHandler} 
              removeHandler={removeHandler}
              likesHandler={likesHandler}
                    search={search} 
              animalData={animalData}
            />
          ),
        },
        {
          path: "/birds",
          element: (
            <Birds
              
            />
          ),
        }, */
        {
          path: "/:category",
          element: <Category />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
