const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const redditData = require('./data.json');
console.log(redditData);

//don't need to require ejs because of this function
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
//with __dirname, we are taking the current dir name where index.js in in(EJS/index.js)
//and joining the full path to get there, with /views. That way you don't 
//need to be in the EJS dir to run the app.

//res object responds 
app.get('/', (req, res) => {
    res.render('home');
})

//What comes after the ":" is a variable we can capture
//We are passing information from the params of our path (:subreddit)
//pass that through req.params to destructured var then to our template called subreddit
//and rendering it into the title and h1
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const data = redditData[subreddit];
    if(data) {
        res.render('subreddit', { ...data });
    } else{
        res.render('notfound', { subreddit });
    } 
})

app.get('/cats' , (req, res) => {
    const cats = [
        'Mik', 'Pop', 'ash', 'ryder', 'arrow'
    ]
    res.render('cats', { cats });
})

app.get('/rand', (req, res) => {
    const num = Math.floor(Math.random() * 500) + 1;
    res.render('random', {rand: num});
})

//sets up local server
app.listen(port, () => {
    console.log("server is listening on port: " + port);
})