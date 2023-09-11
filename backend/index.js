const express = require("express")
const app = express()
const port = 3001
const mongoDB = require("./db")
const mongoDB1 = require("./db1")

// mongoDB();
mongoDB1();

app.get('/', (req,res) => {
    res.send('hello  world')
})

app.listen(port, () => {
    console.log(`nrfongsdfnbgdn at ${port}`)
})