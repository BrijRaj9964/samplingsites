const express = require('express');
const path = require('path');

const app = express();

// Use the PORT environment variable provided by Render or default to 8080
const PORT = process.env.PORT || 8080;

// Serve static files (e.g., HTML, JS, CSS) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Example data for 14 sites
const sites = [
  { id: 1, name: 'Site 1', lat: 40.73061, lng: -73.935242, details: 'Sampling data for Site 2222222' },
  { id: 2, name: 'Site 2', lat: 34.052235, lng: -118.243683, details: 'Sampling data for Site 2' },
  { id: 3, name: 'Site 3', lat: 41.878113, lng: -87.629799, details: 'Sampling data for Site 3' },
  // Add remaining sites here...
];

// Endpoint to fetch site data
app.get('/api/sites', (req, res) => {
  res.json(sites);
});

// Default route to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'map.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

