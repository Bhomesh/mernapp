const express = require("express")
const app = express()
const port = 3003
const mongoDB = require("./db")
const connectToMongoDB = require("./db1")

// mongoDB();
connectToMongoDB();

app.get('/', (req,res) => {
    res.send('hello  world')
})

app.use('/api/',require())

app.listen(port, () => {
    console.log(`connected at ${port}`)
}) 