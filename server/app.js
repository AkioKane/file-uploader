const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");

const initialize = require("./utils/passport-config");

const indexRouter = require("./routes/indexRouter");
const uploadsRouter = require("./routes/uploadsRouter");
const signInRouter = require("./routes/signInRouter");
const signUpRouter = require("./routes/signUpRouter");

const app = express();

app.use(session({ secret: "cats", resave: false, saveUninitialized: false }));
app.use(passport.session());
initialize(passport);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", indexRouter);
app.use("/api/uploads", uploadsRouter);
app.use("/api/sign-in", signInRouter);
app.use("/api/sign-up", signUpRouter);

app.use((req, res, next) => {
  res.status(404).json()
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Server listen on", PORT);
});