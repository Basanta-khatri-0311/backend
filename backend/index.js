// import express from "express";

// const app = express();

// const PORT = process.env.PORT || 3000;

// app.get("/api/joke", (req, res) => {
//   const jokes = [
//     { id: 1, title: " A joke 1", content: "This is a joke 1 " },
//     { id: 2, title: " A joke 2", content: "This is a joke 2 " },
//     { id: 3, title: " A joke 3", content: "This is a joke 3 " },
//   ];
//   res.send(jokes);
// });

// app.listen(PORT, () =>
//   console.log(`Server is runnning on http://localhost:${PORT}`)
// );

import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/api/joke", (req, res) => {
  const jokes = [
    { id: 1, title: " A joke 1", content: "This is a joke 1 " },
    { id: 2, title: " A joke 2", content: "This is a joke 2 " },
    { id: 3, title: " A joke 3", content: "This is a joke 3 " },
  ];
  res.send(jokes);
});

app.get("/api/about", (req, res) => {
  const user = { name: "Basanta Khatri", gender: "Male", age: 23 };
  res.send(user);
});

app.get("/api/contact", (req, res) => {
  res.send(
    "Please visit https://basanta-khatri.netlify.app for more information"
  );
});

app.get("/api/quote", (req, res) => {
  res.send("This a from quote");
});

app.listen(PORT, () =>
  console.log(`Server is runnning on http://localhost:${PORT}`)
);