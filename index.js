const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

//don't need to require ejs because of this function
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
//with __dirname, we are taking the current dir name (EJS/index.js)
//and joining the full path to get there, with /views. That way you don't 
//need to be in the EJS dir to run the app.

//res object responds 
app.get('/', (req, res) => {
    res.render('home');
})

//sets up local server
app.listen(port, () => {
    console.log("server is listening on port: " + port);
})