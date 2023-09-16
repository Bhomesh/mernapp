const express = require("express")
const app = express()
const port = 5000
const mongoDB = require("./db")
const connectToMongoDB = require("./db1")

// mongoDB();
connectToMongoDB();

app.get('/', (req,res) => {
    res.send('hello  world')
})
app.use(express.json())

app.use('/api/',require("./Routes/CreateUser"));    

app.listen(port, () => {
    console.log(`connected at ${port}`)
}) 