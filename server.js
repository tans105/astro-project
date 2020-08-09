const path = require('path');
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

console.log("Staring server");
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));

// Add headers
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function (req, res) {
    res.sendFile('index.html', {root: 'dist/the-astro-project/'}
    );
});

app.post('/sendEmail', function (req, res) {
    var transporter = nodemailer.createTransport({
        service: 'yahoo',
        auth: {
            user: 'tanmayawasthi105@yahoo.com',
            pass: 'kictppfrqtlrfjwi'
        }
    });

    var mailOptions = {
        from: 'tanmayawasthi105@yahoo.com',
        to: 'tanmayawasthi105@yahoo.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });



    res.status(201).send({message: 'Updated successfully'});
});

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
