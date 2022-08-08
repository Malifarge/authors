const express = require('express')
const app = express()
const port = 5000
const idRoutes = require("./routes/id")
const jsonRoutes = require("./routes/json")

app.use('/authors', idRoutes)
app.use('/json', jsonRoutes)

app.get('/', (req ,res) =>{
    res.send('Authors API')
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

