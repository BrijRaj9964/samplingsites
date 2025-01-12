const express = require('express');
const path = require('path');

const app = express();
const PORT = 8888;

// Serve static files (for Leaflet CSS and JS)
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'map.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
