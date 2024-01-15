const express = require("express");
const ejs = require("ejs");

const app = express();

const PORT = 3000;

const str = "hello";

app.set('view engine', 'ejs');


//ejs.render(str, data, options);

const logger = (req,res,next) => {
    console.log(`Request was made at :${req.method}${req.url}`);
    next();
}

app.use(logger);

//templates wip
app.get('/', (req, res) => {
    const content = "Hello this is me"
    res.render('pages/index', {
        content: content,
      });
    });

app.get('/about', function (req, res) {
    res.render('pages/about');
});


app.listen(PORT, () => {
    console.log("The server has been fired");
});