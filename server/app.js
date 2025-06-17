const express = require("express");

const indexRouter = require("./routes/indexRouter");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server listen on ", PORT);
});