const Book = require("../models/book");

const createBook = async (req, res) => {
  try {
    const { title, author, year, genre } = req.body;
    const newBook = new Book({ title, author, year, genre });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar livro " });
  }
};

const getBooks = async (_req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
};

const searchBook = async (req, res) => {
  try {
    const { id } = req.params; //params = parametros. Que parâmetro estamos usando para buscar o livro?
    const book = await Book.findById(id); // o que significa "find" em inglês?

    if (!book) {
      // ! => "não". Se o livro não for encontrado
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    res.json(book);
  } catch (err) {
    // Se der algum erro
    next(err);
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const options = { new: true, runValidators: true };

    const updatedBook = await Book.findByIdAndUpdate(id, updates, options);
    if (!updatedBook) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    res.json(updatedBook);
  } catch (err) {
    res.status(500).json({ error: "Erro ao atualizar livro." });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ error: "livro não encontrado" });
    }

    res.json({ message: "Livro excluído com sucesso" });
  } catch (err) {
    res.status(500).json({ error: "Erro ao excluir livro" });
  }
};

const divide = (req,res) => {
    try {
        const numerador = 10;
        const denominador = 0;

        if (denominador === 0){
            throw new Error("Não é possível dividir por zero.");
            return;
        }

        const resultado = numerador / denominador;
        res.json({resultado});
    } catch (err) {
        res.status(400).json({error: err.message})
    }
};

module.exports = { createBook, getBooks, searchBook, updateBook, deleteBook, divide };
