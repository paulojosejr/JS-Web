const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

app.post('/users', (req, resp) =>{
    console.log(req.body)
    resp.send('<h1>Congratulations User included!</h1>')
})

app.post('/users/:id', (req, resp) =>{
    console.log(req.params.id)
    console.log(req.body)
    resp.send('<h1>Congratulations User changed!</h1>')
})

app.listen(4004)