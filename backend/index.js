const express = require("express")
const app = express()
const port = 3003
const mongoDB = require("./db")
const onnectToMongoDB = require("./db1")

// mongoDB();
onnectToMongoDB();

app.get('/', (req,res) => {
    res.send('hello  world')
})

app.listen(port, () => {
    console.log(`connected at ${port}`)
}) 