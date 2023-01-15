const express = require('express');
const Router = express.Router();

let gifts = {
    'list': [
        {
            'name': 'Сладкий подарок',
            'cost': "500-5000р",
            'desc': "Набор сладостей"
        },
        {
            'name': 'Елочная игрушка',
            'cost': "50-2500р",
            'desc': "Игрушка на ёлку"
        }
    ]
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

Router.get("/", (req, res) => {
    res.send("Все ок!")
})

Router.get('/gift', (req, res) => {
    res.json(gifts)
})
Router.get('/random', (req, res) => {
    let i = randomInteger(0, gifts.list.length-1)
    res.send(gifts.list[i])
})

module.exports = Router