import express from "express";

const app = express();

app.get("/app/notes", (req, res) => {
    //delete a note
    res.send("You got 5 notes");
});

app.get("/app/notes", (req, res) => {
    //create a note
    res.send("You got 5 notes");
});

app.listen(5001, () => {
  console.log("Server started on PORT: 5001");
});