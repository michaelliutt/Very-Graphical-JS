const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname + "/pub")));

app.get("/", (req, res) => {
  res.send("<h1>This should be the root route!</h1>");
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
