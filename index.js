const express = require("express");
const ejs = require("ejs");

const app = express();

const PORT = 3000;

const str = "hello";

app.set('view engine', 'ejs');


//ejs.render(str, data, options);

app.get('/', (req, res) => {
    res.render("pages/index")
})

app.get('/about', function (req, res) {
//    res.render('pages/about');
});


app.listen(PORT, () => {
    console.log("The server has been fired");
});
