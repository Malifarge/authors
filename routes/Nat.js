const express = require('express')
const app = express()

const authors = [
    {
        id: 1,
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        id: 2,
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        id: 3,
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        id: 4,
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

app.get('/:id', (req, res) =>{
    let authorsID = req.params.id;
    console.log(authorsID);
    res.json({
        name: authors[authorsID-1].name,
        nationality: authors[authorsID-1].nationality
    })
})

module.exports = app