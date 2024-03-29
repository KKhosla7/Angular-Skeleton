

// Initializing Express, http, path

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();



// Configuring Static Env.

app.configure(function () {
    app.set('port', process.env.PORT || 3000);
    app.use(
        "/", express.static(path.join(__dirname, 'views'))
    );
});


// Create an Express Server

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
