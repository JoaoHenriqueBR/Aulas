const express = require("express");
const connectDB = require("./config/config");

const Book = require("./models/book");

const app = express();
connectDB();
app.use(express.json());


app.listen(3000, () => console.log("Server running on port 3000"));

// Create
app.post("/api/books", async (req, res) =>{
    try {
        const { title, author, year, genre } = req.body;
        const newBook = new Book({ title, author, year, genre });
        await newBook.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(500).json({ error: "Erro ao criar livro"});
    }
})

// Read - Busca geral de livros 
app.get("/api/books", async (_req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar livros"});
    }
});

// Read - Busca Especifica
app.get("/api/books/:id", async (req, res) => { // observe o :id aqui, o que você acha que ele faz?
    try {
        const { id } = req.params; //params = parametros. Que parâmetro estamos usando para buscar o livro?
        const book = await Book.findById(id); // o que significa "find" em inglês?

        if (!book) { // ! => "não". Se o livro não for encontrado
            return res.status(404).json({ error: "Livro não encontrado" });
        }

        res.json(book);
    } catch (err) { // Se der algum erro
        res.status(500).json({ error: "Erro ao buscar livro"});
    }
});

// Update 
app.patch("/api/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const options = { new: true, runValidators: true };

        const updatedBook = await Book.findByIdAndUpdate(id, updates, options);
        if (!updatedBook) {
            return res.status(404).json({ error: "Livro não encontrado"});
        }

        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ error: "Erro ao atualizar livro."});
    }
});

// Delete
app.delete("/api/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        
        if (!deletedBook){
            return res.status(404).json({ error: "livro não encontrado"});
        }

        res.json({ message: "Livro excluído com sucesso"});
    } catch (err) {
        res.status(500).json({ error: "Erro ao excluir livro"});
    }
});

// Validação de erros com try-catch
app.get("/divide", (req,res) => {
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
});