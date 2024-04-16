const express = require('express');
const app = express()

app.get('/api/products',(req, res) =>{
    const data = fs.readFileSync('./data.json',"utf8");
    const products = JSON.parse(data)
    res.json(products);
    // res.send("This is my home page");
})

app.listen(1400)