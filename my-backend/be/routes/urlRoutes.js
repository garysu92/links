const express = require('express');
const router = express.Router();
const URL = require('../models/Url');

// GET all URLs
router.get('/', async (req, res) => {
  try {
    const urls = await URL.find();
    res.json(urls);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching URLs' });
  }
});

// POST a new URL
router.post('/', async (req, res) => {
  const { name, url } = req.body;

  try {
    const newUrl = new URL({ name, url }); // Include both name and url
    await newUrl.save();
    res.status(201).json(newUrl);
  } catch (error) {
    res.status(500).json({ message: 'Error adding URL' });
  }
});

module.exports = router;
