const express = require('express');
const router = express.Router();
const Link = require('../models/Link');

// GET all URLs
router.get('/', async (req, res) => {
  try {
    const urls = Link.find()
    .then((links) => res.json(links))
    .catch((err) => res.status(500).json({ error: 'Error retrieving links from database' }));

    console.log(urls)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching URLs' });
  }
});

// POST a new URL
router.post('/', async (req, res) => {
  const { name, url } = req.body;

  try {
    const newUrl = new Link({ name, url });
    await newUrl.save();
    res.status(201).json(newUrl);
  } catch (error) {
    res.status(500).json({ message: 'Error adding URL' });
  }
});

module.exports = router;
