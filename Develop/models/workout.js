const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    exercises: [{
        type: {
            type: String,
            trim: true
        },
    
        name: {
            type: String,
            trim: true,
            required: "This is a required field"
        },
    
        duration: {
            type: Number,
            required: "This is a required field"
        },
        
        weight: {
            type: Number,
            required: "This is a required field"
        },
    
        reps: {
            type: Number,
            required: "This is a required field"
        },
    
        sets: {
            type: Number,
            required: "This is a required field"
        }
    }],

    totalDuration: {
        type: Number,
        default: 0,
    },
    
    date: {
        type: Date,
        default: Date.now
    }
    
});

module.exports = mongoose.model("workout", workoutSchema);