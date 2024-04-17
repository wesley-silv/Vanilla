const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

let books = [
    { id: 1, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
    { id: 2, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' }
];

// Endpoint para obter todos os livros
app.get('/api/books', (req, res) => {
    res.json(books);
});

// Endpoint para obter um livro por ID
app.get('/api/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(book => book.id === id);
    if (book) {
        res.json(book);
    } else {
        res.status(404).send('Livro não encontrado.');
    }
});

// Endpoint para adicionar um novo livro
app.post('/api/books', (req, res) => {
    const { title, author } = req.body;
    const id = books.length + 1;
    const newBook = { id, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
