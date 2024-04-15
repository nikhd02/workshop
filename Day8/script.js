const express = require('express');
const app = express()

app.get('/home',(req, res) =>{
    res.send("This is my home page");
})

app.listen(1400)