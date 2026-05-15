const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {type: String}, // Título do livro
    author: {type: String}, // Autor
    year: {type: Number }, // Ano de publicação
    genre: {type: String}, // Gênero
    createdAt: {type: Date, default: Date.now} // Data de criação
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;