const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    
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
    },

    date: {
        type: Date,
        default: Date.now
    }

});

// Mock data
// {
//     day: new Date(new Date().setDate(new Date().getDate() - 2)),
//     exercises: [
//       {
//         type: "resistance",
//         name: "Military Press",
//         duration: 20,
//         weight: 300,
//         reps: 10,
//         sets: 4
//       }
//     ]
//   }

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;