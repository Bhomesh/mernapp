const express = require("express")
const app = express()
const port = 3003
const mongoDB = require("./db")
const mongoDB1 = require("./db1")

mongoDB();
// mongoDB1();

app.get('/', (req,res) => {
    res.send('hello  world')
})

app.listen(port, () => {
    console.log(`connected at ${port}`)
}) 