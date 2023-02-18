// Load Express

const express = require('express')
const app = express()

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

// Load routes

const indexRouter = require('./src/routes/index.route')

// Setup Routes

app.use('/', indexRouter)

app.get('*', function(req, res){
    res.redirect('/')
});

// Setup Server

const server = require("http").createServer(app)
const port = 3000

// Load MongoDB

const dbo = require('./db/conn')

dbo.connectToServer(function (err) {
    if (err) {
        console.error(err);
        process.exit();
    }
    server.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
});