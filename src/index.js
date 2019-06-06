const express = require('express');
/*const myConnection = require('express-myconnection');
const mysql = require('mysql');*/
const path = require('path');
const morgan = require('morgan');
const app = express();
require('./database');

const documentRouter = require('./public/router');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'));

app.use(morgan('dev'));
/*app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'mydatabase'
}, 'single'));
*/
app.use(express.urlencoded({extended: false}));

app.use('/', documentRouter);

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});

