import express from "express";
import ejs from "ejs"
import path from "path";

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.listen(3001, () => {
    console.log("app started on 3000")
})

app.get('/api/load', (req, res) => {
    res.render('index');
})

app.get('/auth');
app.get('/uninstall');