import React, { useEffect, useState } from "react";
import axios from "axios";
import { response } from "express";

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/joke")
      .then((response) => setJokes(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <p>jokes: {jokes.length}</p>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
};

export default App;
