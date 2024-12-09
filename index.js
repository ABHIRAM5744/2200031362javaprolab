const express = require('express');
const bodyParser = require('body-parser');
const calculationRoutes = require('./routes/calculationRoutes');
const stringRoutes = require('./routes/stringRoutes');
const pageRoutes = require('./routes/pageRoutes');

const app = express();
const port = 8080;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Root route
app.get('/', (req, res) => {
  res.render('home');
});

// Routes
app.use('/SpringMVC', pageRoutes);
app.use('/SpringMVC', calculationRoutes);
app.use('/SpringMVC', stringRoutes);

// Error handling middleware
app.use((req, res) => {
  res.status(404).render('error', {
    message: 'Page not found',
    error: { status: 404 }
  });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).render('error', {
    message: err.message || 'Internal Server Error',
    error: { status: err.status || 500 }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});