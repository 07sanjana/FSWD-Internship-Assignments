const express = require('express');
const router = express.Router();

let authors = require('../data/authors');

// GET authors
router.get('/', (req, res) => {
  res.json(authors);
});

// POST author
router.post('/', (req, res) => {

  const newAuthor = {
    id: authors.length + 1,
    name: req.body.name
  };

  authors.push(newAuthor);

  res.status(201).json(newAuthor);
});

module.exports = router;