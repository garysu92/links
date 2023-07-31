// MongoDB configuration mongodb+srv://garyzsu:garyzsu@cluster0.cwuuyyw.mongodb.net/
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB configuration
const mongoURI = 'mongodb+srv://garyzsu:garyzsu@cluster0.cwuuyyw.mongodb.net/'; // Replace with your MongoDB connection string

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Routes
const urlRoutes = require('./routes/urlRoutes');
app.use('/api/urls', urlRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
