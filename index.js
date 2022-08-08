const express = require('express')
const app = express()
const port = 5000
const natRoutes = require("./routes/Nat")

app.use('/authors', natRoutes)


// app.get('/authors/:id/', (req, res) =>{
//     let authorsID = req.params.id;
//     console.log(authorsID);
//     res.json({
//         name: authors[authorsID-1].name,
//         nationality: authors[authorsID-1].nationality
//     })
// })

app.get('/', (req ,res) =>{
    res.send('Authors API')
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

