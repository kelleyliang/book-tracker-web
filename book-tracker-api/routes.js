// routes.js
const express = require('express');
const router = express.Router();
const { Book } = require('./models'); // Destructure the Book model from models.js

// HTTP method: get, post, put, delete
// in express routes look like this:
//      app.METHOD(PATH, HANDLER)
//      path: endpoint, handler: function that takes a requests and send a response

// GET all books of a user
router.get('/books', async(req, res) => {
    try {
        // await pauses until the promise is fufilled
        const books = await Book.find()
        // sends it back to request as a json file
        res.json(books);

        // error catching
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
});

// POST a new book
router.post('/books', async(req,res) => {
    // check this line not too sure if this is correct
    const {title, author, public_visibility, status} = req.body;
    const newBook = new Book({
        title,
        author,
        public_visibility,
        status
    });

    try {
        const savedBook = await newBook.save()
        res.status(201).json(savedBook);

    } catch (err) {
        res.status(504000).json({message: err.message});
    }
});

// GET a specific book by status like


// UPDATE a book
router.patch('/books/:id', async(req, res) => {
    
});


// DELETE a book
router.delete('/books/:id', async(req, res) => {
    try {
        const deleted = await Book.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({message: 'Book not found'});
        res.json.json({message: 'Book deleeted'});
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});