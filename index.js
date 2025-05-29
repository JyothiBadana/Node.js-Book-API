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
