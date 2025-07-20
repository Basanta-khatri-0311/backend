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


app.listen(PORT, () =>
  console.log(`Server is runnning on http://localhost:${PORT}`)
);
