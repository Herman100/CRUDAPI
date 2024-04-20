const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  res.send("Edna would be my future wife");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});
