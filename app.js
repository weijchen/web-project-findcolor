const express = require("express"),
      app     = express(),
      PORT    = process.env.PORT || 3030;

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(PORT, function (req, res) {
  console.log(`Server starts at http://localhost:${PORT}`);
});
