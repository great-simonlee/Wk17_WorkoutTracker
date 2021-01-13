const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// mongodb+srv://atlasAdmin:1234qwer@cluster0.bu7de.mongodb.net/workout?retryWrites=true&w=majority


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", {
    useNewUrlParser: true,
    useFindAndModify: false
});




require("./seeders/seed.js");
require("./routes/htmlRoute.js")(app);
require("./routes/apiRoute.js")(app);

app.listen(PORT, () => {
    console.log("Server is listening on: " + PORT);
});