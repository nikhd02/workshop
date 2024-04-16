const express = require('express');
const app = express()
const fs = require('fs');
const { status } = require('init');
const fsPromises = require('fs').promises;

app.use(express.json());

app.get('/api/products',async(req, res) =>{
    const data = await fs.readFileSync('data.json',"utf8");
    const arr = JSON.parse(data);
    res.json({
        status: 'Success',
        result: arr.length,
        data:{
            products: arr
        }
    });
    // res.send("This is my home page");
});

app.post('/api/products',async (req, res) =>{
    const data = req.body;
    data.id = 121;
    console.log(data);

    const db = await fsPromises.readFile("./data1.json", 'utf8');
    const arr = JSON.parse(db);
    const len = arr.length;
    const newProduct = data;
    if(len==0){
        
        newProduct.id = 1;
    }
    else{
       
        newProduct.id = (arr[len-1].id)+1;        
        
    }
    arr.push(newProduct);
    fsPromises.writeFile("./data1.json", JSON.stringify(arr));
    res.json({

        status: 'success',
        results: 1,
        data:{
            newProduct:newProduct,
        }
    }
    )
    // res.send("Work in progress");
    
})

// app.delete()

app.listen(1400);