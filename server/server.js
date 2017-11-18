var express = require('express');
var morgan = require('morgan'); 
var bodyParser = require('body-parser');
var path = require("path");
var app = express();
const us = require('./service/user_service');
const uc = require('./controller/user_controller');

app.set('port', (process.env.PORT || 80));
app.use('/', express.static(__dirname + '/../dist'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/users', uc);

// app.get('/api/users',(req,res,next)=>{
//     var po = {}
//     if(req.query.user){
//         po = JSON.parse(req.query.user);
//     }
//     console.log(po);
//     us.selectUser(po)
//     .then((result)=>{
//         res.json(result);
//     });
// });

// app.get('/api/users/his/:userNo',(req,res,next)=>{
//     var po = {"userNo": req.params.userNo};
//     console.log(po);3
//     us.selectUserHis(po)
//     .then((result)=>{
//         console.log(result);
//         res.json(result);
//     });
// });

app.use(function (req, res, next) {
    res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});


app.listen(app.get('port'), function() {
    console.log('해당포트로 서버실행 => '+app.get('port'));
});