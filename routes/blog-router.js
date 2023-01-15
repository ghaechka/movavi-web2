const express = require('express');
const Router = express.Router();
var path = require('path');

Router.get('/', (req, res) => {
    res.render('blog.hbs')
})

Router.get("/:name", (req, res) => {
    let name = req.params.name;
    res.render('blog.hbs', {
        'name': name,
        'articles': [
            {
                title: "Запись №1",
                text: "Сообщение"
            },
            {
                title: "Запись №2",
                text: "q3rtkiehrgustgkudfgiule"
            }
        ]
    })
})

module.exports = Router