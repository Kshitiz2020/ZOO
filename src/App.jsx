import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../routes/Home";
import Animals from "../routes/Animal";
import Birds from "../routes/Birds";
import About from "../routes/About";
import { animals, birds } from "./animalsLists";
import ErrorPage from "../routes/Error-page";
import Root from "../routes/Root";
import Card from "../Components/Card";

const App = () => {
  const [animalData, setAnimals] = useState(animals);
  const [birdList, setBirds] = useState(birds);
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const removeHandler = (name) => {
    removeAnimalsHandler(name);
    removeBirdsHandler(name);
  };

  const removeAnimalsHandler = (name) => {
    const updatedArray = animalData.filter((animal) => animal.name !== name);
    setAnimals(updatedArray);
  };

  const removeBirdsHandler = (name) => {
    const updatedArray = birdList.filter((bird) => bird.name !== name);
    setBirds(updatedArray);
  };

  const likesHandler = (name, action) => {
    const updatedArray = animalData.map((animal) => {
      if (animal.name === name) {
        if (action === "increase") {
          return { ...animal, likes: animal.likes + 1 };
        } else {
          return { ...animal, likes: animal.likes - 1 };
        }
      } else {
        return animal;
      }
    });
    setAnimals(updatedArray);
    setBirds(updatedArray);
  };

  // Define the router outside the return statement
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home searchHandler={searchHandler} /> },
        {
          path: "/animals",
          element: (
            <Animals
              searchHandler={searchHandler}
              removeHandler={removeHandler}
              search={search}
            />
          ),
        },
        {
          path: "/birds",
          element: (
            <Birds
              searchHandler={searchHandler}
              removeHandler={removeHandler}
              search={search}
            />
          ),
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
      <input type="text" placeholder="Search" onChange={searchHandler} />
      <Header name="Welcome To ZOO" />
      <main>
        <div className="reactions"></div>
        <Card addLikesHandler={likesHandler} />
      </main>
      <RouterProvider router={router} />
      <Footer copy="Thanks for visiting ZOO! Have a Nice Day" />
    </>
  );
};

export default App;
