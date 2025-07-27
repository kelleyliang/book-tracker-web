import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    public_visibility: {type: Boolean, default: true},
    status: {type: String, enum:['read', 'reading', 'to-read'], default: 'to-read'},
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


const Book = mongoose.model('Book', bookSchema);
module.exports = { Book };
