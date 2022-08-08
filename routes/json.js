
const express = require('express')
const app = express()
const authors = require('../author.json')


app.get('/:id', (req, res) =>{
    const {id} = req.params
    const author = authors.find(author => author.id ===Number (id))
    if (author){
        res.json({
            name : author.name, 
            nationality : author.nationality}
        )
    }else{
        res.status(404).send("Not Found")
    }
})

app.get('/:id/books', (req, res)=>{
    const {id} = req.params
    const author = authors.find(author => author.id ===Number (id))
    if (author){
        res.json({
            books : author.books
        })
    } else{
        res.status(404).send("Not Found")
    }
})

module.exports = app