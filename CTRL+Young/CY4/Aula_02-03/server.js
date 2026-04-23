// Create
let movies = [
    { id:1, title: "O Senhor dos Anéis", genre: "Fantasia", year: 2001},
    { id:2, title: "Matrix", genre: "Ficção Científica", year: 1999}
];

movies.push({id:3, title: "Avatar", genre: "Ficção Científica", year: 2009})

console.log(movies);

// Read
movies.forEach(movie => {
    console.log(`Título: ${movie.title}, Gênero: ${movie.genre}, Ano: ${movie.year}`);
});

// Update
let movieToUpdate = movies.find(movie => movie.id === 1)
if (movieToUpdate) {
    movieToUpdate.genre = "Aventura";
    console.log(`Filme atualizado: ${movieToUpdate.title}, Gênero: ${movieToUpdate.genre}`);
}

// Delete
let index = movies.findIndex(movie => movie.id === 3);
if (index !== -1){
    movies.splice(index, 1);
    console.log("Filme removido!");
}

console.log(movies)

const express = require('express'); // Importa o Express
const app = express(); // Cria uma aplicação Express
app.use(express.json()); // Permite trabalhar com dados JSON

// Inicia o servidor na porta 3000
app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

app.get('/read', (req, res) => {
    res.status(200).json(movies);
});
