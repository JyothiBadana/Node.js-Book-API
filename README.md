# Node.js-Book-API
A simple REST API built with Node.js and Express to manage a list of books with full CRUD functionality using in-memory storage.

# 📚 Book Management REST API

A simple REST API built using **Node.js** and **Express.js** to manage a list of books. This API performs basic **CRUD operations** with data stored in-memory (no database).

## 🎯 Objective
Build REST API endpoints to perform Create, Read, Update, and Delete operations on a list of books.

## Tools Used
- **Node.js** – Backend runtime
- **Express.js** – Web framework
- **VS Code** – Code editor
- **Postman** – API testing tool

## Features
- `GET /books` – Retrieve all books
- `POST /books` – Add a new book
- `PUT /books/:id` – Update a book by ID
- `DELETE /books/:id` – Delete a book by ID

## Book Object Structure
json
{
  "id": "1",
  "title": "The Alchemist",
  "author": "Paulo Coelho"
}

##package code
{
  "name": "book-api",
  "version": "1.0.0",
  "description": "A simple REST API to manage a list of books using Node.js and Express",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "keywords": [
    "books",
    "rest-api",
    "express",
    "nodejs",
    "crud"
  ],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2"
  }
}

##Index.js code
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [];

// GET all books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST a new book
app.post('/books', (req, res) => {
  const { id, title, author } = req.body;
  books.push({ id, title, author });
  res.status(201).json({ message: 'Book added' });
});

// PUT update book by id
app.put('/books/:id', (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;
  const book = books.find(b => b.id == id);

  if (book) {
    book.title = title || book.title;
    book.author = author || book.author;
    res.json({ message: 'Book updated' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

// DELETE book by id
app.delete('/books/:id', (req, res) => {
  const { id } = req.params;
  const index = books.findIndex(b => b.id == id);

  if (index !== -1) {
    books.splice(index, 1);
    res.json({ message: 'Book deleted' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});















