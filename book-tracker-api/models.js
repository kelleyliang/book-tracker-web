import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    completed: Boolean,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    notes: [
        {
            text: { type: String},
            dateAdded: {type: Date, default: Date.now},
        }
    ],
    rating: {
        type: Number,
        min: 0,
        max: 5,
    }, 
    // need to add review and other stuff interesting start though
});