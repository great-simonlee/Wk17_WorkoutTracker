const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const controller = require("./routes/api.js")

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(controller);

app.listen(PORT, () => {
    console.log("Server is listening on: " + PORT);
});