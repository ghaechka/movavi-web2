const express = require("express");
const cors = require("cors");
const BlogRouter = require("./routes/blog-router")
const ApiRouter = require("./routes/api")

const HOST = "localhost";
const PORT = 3000;

const app = express();

app.set("view engine", "hbs");
// установка шаблонизатора
app.set('views', __dirname + '/view');
// устанавливаем папку с шаблонами

app.use(cors(
    {
        origin: "*"
    }
))

app.use(express.static(__dirname + "/static"))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.use('/blog', BlogRouter)
app.use('/api', ApiRouter)

app.use((req, res, next) => {
    var pages = ['/about'];
    var link = req.path;
    if (pages.includes(link)) {
        res.sendFile(__dirname + `/public${link}.html`)
        // /public/about.html
    } else {
        next(); // если страницы нет в списке pages, то переходим к следующему методу
    }
})

app.get('/test/:id', (req, res) => {
    var id = req.params.id;
    res.send(`Вы перешли на подстраницу ${id}`)
})

app.get('/square/:id/:wer', (req, res) => {
    var id = req.params.wer;
    console.log(Boolean(Number(id)));
    if (Number(id)) {
        res.send(`Получилось ${Math.pow(id, 2)}`)
    } else {
        res.send(`Получилось ${id + id}`)
    }
})

app.use((req, res, next) => {
    res.status(404).send("404. Такой страницы не существует!")
})

app.listen(PORT, HOST, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Сервер http://${HOST}:${PORT} запущен!`);
    }
})