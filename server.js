const express = require('express');
const cors = require('cors');
const path = require('path');
const sendEmailRoute = require('./sendEmail');

const app = express();
app.use(cors());
app.use(express.json());
app.use(sendEmailRoute);

// Serve static files from the React app (optional, for production)
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 