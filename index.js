
import dotenv from 'dotenv'
dotenv.config()
import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello world!")
})

app.get('/twitter', (req, res) => {
    res.send('You are currently on twitter')
})


app.get('/login', (req, res) => {
    res.send(`<h1>Hi from h1</h1>`)

    
})

app.get('/basantkhatri', (req, res) => {
    res.send('My page')
})

app.listen(process.env.PORT, () => {
    console.log(`App listening on ${port}`)
})