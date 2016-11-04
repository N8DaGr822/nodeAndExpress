var express = require('express');

var app = express();

var sql = require('mssql');

var port = process.env.PORT || 5000;

var nav = [{
    Link: '/Books',
    Text: 'Book'
        }, {
    Link: '/Authors',
    Text: 'Author'
        }];

var bookRouter = require('./src/routes/bookRoutes')(nav);


app.use(express.static('Public'));

app.set('views', './src/views');


app.use('/Books', bookRouter);

app.set('view engine', '.ejs');

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [{
            Link: '/Books',
            Text: 'Books'
        }, {
            Link: '/Authors',
            Text: 'Authors'
        }]
    });
});
app.get('/books', function (req, res) {
    res.send('Hello Books');
});
app.listen(5000, function (err) {
    console.log('running server on port ' + port);
});