const express = require('express');
const hbs = require("hbs");
const path = require('path');
const app = express();
const port = process.env.PORT || 8000;

// public static path

const staticPath = path.join(__dirname,"../public");
const template_path = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials"); 

app.set('view engine', 'hbs');
app.set('views',template_path);
app.use(express.static(staticPath));
hbs.registerPartials(partialsPath);

// routing static 

app.get("/", (req, res) => {
    res.render("index");
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/weather", (req, res) => {
    res.render("weather");
})

app.get("*", (req, res) => {
    res.render("404",{
        errorMsg:'Opps! page not found , click here to go back'
    });
})

app.listen(port, () => {
    console.log(`listening to the port at ${port}`)
})