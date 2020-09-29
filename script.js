require('./model/mongodb');

// Import the necessary packages

const express = require('express')
var app = express()

const path = require('path')
const exphb = require('express-handlebars')
const bodyparser = require('body-parser')

const courseController = require('./controllers/courseController');

app.use(bodyparser.urlencoded({
    extended: true
}));

/* app.get('/', (req, res) => {
    res.send('<h2 style="font-family: Malgun Gothic; color: midnightblue ">Welcome to AKS Techies Node.js MongoDB Tutorial!!</h2> Click Here to go to <b> <a href="/course">Course Page</a> </b>');
}); */

app.get('/', (req, res) => {
    res.render("course/courseAddEdit", {
        viewTitle: "Insert a New Course for Edureka"
        });
});

app.use(bodyparser.json());

//Configuring Express middleware for the handlebars
app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphb({ extname: 'hbs', defaultLayout: 'mainLayout', layoutDir: __dirname + 'views/layouts/' }));
app.set('view engine', 'hbs');

//Establish the server connection
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));

//Set the Controller path which will be responding the user actions
app.use('/course', courseController);