var express = require('express');
var morgan = require('morgan'); 
var bodyParser = require('body-parser');
var path = require("path");
var dbConfig = require('./conf/dbconfig.js');
const mysql = require('mysql');
var connection = mysql.createConnection(dbConfig);
var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../dist'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(function (req, res, next) {

    var url = req.path;
    if (url === "/api/users") {
       connection.query('SELECT userNo, userName, userId, userPwd from user_info', 
        function(err, rows){
            if(err) throw err;
            console.log('The solution is: ', rows);
            res.json(rows);
        })
    }
    else {
        // redirect all html requests to `index.html`
        res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
    }
});

app.listen(app.get('port'), function() {
    console.log('Angular2 fullstack listening on port '+app.get('port'));
});