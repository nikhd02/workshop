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
    
});

app.put('/api/products/:id', async (req, res) =>{
    const arr = JSON.parse(await fsPromises.readFile("./data1.json", "utf8"))
    // console.log(req);
    
    res.send(" Work in progress ");
    const data =req.body;
    const requid = parseInt(req.params.id);
    const newArr  = arr.map((elem) =>{
        if(elem.id==requid)return data;
        else return elem;
    });
    fsPromises.writeFile("./data1.json", JSON.stringify(newArr));
});


app.delete('/api/products/:id', async(req, res) =>{
    const arr = JSON.parse(await fsPromises.readFile("./data1.json", "utf8"));
    const requid = parseInt(req.params.id);
    res.send("Work in progress");
    const newArr  = arr.filter((elem) => elem.id != requid);

    fsPromises.writeFile("./data1.json", JSON.stringify(newArr));

})

app.listen(1400);