const express = require("express");
const ejs = require("ejs");

const app = express();

const PORT = 3000;

const str = "hello";

app.set('view engine', 'ejs');

const helper = require("./helper");


app.use(express.urlencoded({extended : true}));
//ejs.render(str, data, options);

const logger = (req, res, next) => {
    console.log(`Request was made at :${req.method}${req.url}`);
    next();
}





app.use(logger);
app.use(express.static("./images"));
app.use(express.static("./"));

//templates wip
app.get('/', (req, res) => {
    const content = "Hello this is me"
    res.render('pages/index', {
        content: content,
    });
});

app.get('/about', (req, res) => {
    const img = 'img.jpg';
    const show = () => {
        console.log("Hello")
    }
    const showFunc = show;


    res.render('pages/about', {
        img: img,
        helper:helper,
    });
});

app.post('/about', (req,res) => {
    res.download("./images/img.jpg");
});

app.listen(PORT, () => {
    console.log("The server has been fired");
});


function show(){
    console.log("hello");
}