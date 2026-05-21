const express = require("express");
const router = express.Router();

const bookController = require('../controllers/bookController');
const validateTitle = require("../middlewares/validateTitle");
const Book = require("../models/book");

router.post("/books", validateTitle, bookController.createBook);

router.get("/books", bookController.getBooks);

router.get("/books/:id", bookController.searchBook);

router.patch("/books/:id", validateTitle, bookController.updateBook);

router.delete("/books/:id", bookController.deleteBook);

router.get("/divide", bookController.divide)

module.exports = router;