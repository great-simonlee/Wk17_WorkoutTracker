const db = require("../models");
const workout = require('../models/workout');

module.exports = function(app) {
    app.get("/api/workout", (req, res) => {
        db.Workout
            .find({})
            .then((dbWorkout) => {
                Workout.forEach((w) => {
                    let total = 0;
                    w.exercise.forEach((e) => {
                        total += e.duration;
                    });
                    Workout.totalDuration = total;
                });
                res.json(dbWorkout);
            })
            // .then(dbWorkout => {
            //     res.json(dbWorkout)
            // })
            .catch(err => {
                res.status(400).json(err);
            });
    });

    app.post("/api/workouts", ({ body }, res) => {
        db.Workout
            .create(body)
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    })

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout
            .findOneAndUpdate(
                { _id: req.params.id },
                {
                    $inc: { totalDuration: req.body.duration },
                    $push: { exercise: req.body }
                },
                { new: true }
            )
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    });

    app.get("/api/workouts/range", (req, res) => {
        db.Workout
            .find({})
            .then(dbWorkout => {
                res.json(dbWorkout)
            })
            .catch(err => {
                res.status(400).json(err)
            })
    });
};