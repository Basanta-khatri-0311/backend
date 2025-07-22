import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [about, setAbout] = useState();
  const [quote, setQuote] = useState();
  const [contact, setContact] = useState();

  const fetchJokes = () => {
    axios
      .get("/api/joke")
      .then((response) => setJokes(response.data))
      .catch((error) => console.log(error));
  };
  const fetchQuotes = () => {
    axios
      .get("/api/quote")
      .then((res) => setQuote(res.data))
      .catch((e) => console.log(e));
  };

  const fetchAbout = () => {
    axios
      .get("/api/about")
      .then((res) => setAbout(res.data))
      .catch((e) => console.log(e));
  };

  const fetchContact = () => {
    axios
      .get("/api/contact")
      .then((res) => setContact(res.data))
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div>
        <button onClick={fetchJokes}>Jokes</button>
        <button onClick={fetchAbout}>About</button>
        <button onClick={fetchContact}>Contact</button>
        <button onClick={fetchQuotes}>Quotes</button>
      </div>
      <div>
        {jokes.map((joke) => (
          <div key={joke.id}>
            <p>{joke.title}</p>
            <p>{joke.content}</p>
          </div>
        ))}
      </div>
      <div>
        <h2>Here we can find my about</h2>
        {about &&
          Object.entries(about).map(([key, value]) => (
            <p key={key}>
              <strong>{key}:</strong> {value}
            </p>
          ))}
      </div>

      <div>
        <h2>Here is a quote</h2>
        <p>{quote}</p>
      </div>

      <div>
        <h2>Here is a contact</h2>
        <p>{contact}</p>
      </div>
    </>
  );
};

export default App;
