const path = require('path');
const express = require('express');
const app = express();

console.log("Staring server");
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/the-astro-project/'}
);
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
