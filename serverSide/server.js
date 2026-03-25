// server.js
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();

// Railway-assigned PORT (mandatory)
const PORT = process.env.PORT;
if (!PORT) {
  console.error("PORT not defined! Railway must provide process.env.PORT");
  process.exit(1);
}

app.use(cors({ origin: '*' }));
app.use(express.json());

// Temporary in-memory storage for sites
const mySites = {};

// Ignore favicon requests (browser automatically requests it)
app.get('/favicon.ico', (req, res) => res.status(204).end());

// Health check route
app.get('/', (req, res) => res.send("Server is running"));

// Create a new site
app.post('/mySites', (req, res) => {
  const siteId = uuidv4();
  mySites[siteId] = req.body;

  const siteUrl = `${req.protocol}://${req.get('host')}/mySites/${siteId}`;
  console.log("Generated site URL:", siteUrl);

  res.json({ previewUrl: siteUrl, id: siteId });
});

// Get a single site by ID
app.get('/mySites/:id', (req, res) => {
  const site = mySites[req.params.id];
  if (!site) return res.status(404).send("Site doesn't exist on this URL");
  res.json(site);
});

// Get all sites
app.get('/mySites', (req, res) => res.json(mySites));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
