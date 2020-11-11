const express = require('express');
const cors = require('cors');

const app = express();

console.log("<--------------Starting server---------------->");

app.use(express.static(__dirname + '/dist'));
app.use(cors());
app.options('*', cors());

// For all GET requests, send back index.html
app.get('/*', function (req, res) {
    res.sendFile('index.html', {root: 'dist/the-astro-project/'}
    );
});

app.listen(process.env.PORT || 8080);
