const express = require("express");
const app = express();
const PORT = 3000;
const route = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(route);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
