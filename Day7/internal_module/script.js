// const fs = require('node:fs');

// const data = fs.readFileSync('myReadMe.txt');

// console.log(data);

// const data = fs.readFileSync('myReadMe.txt', {encoding: 'ucs-2'});

// console.log(data);

// const data = fs.readFileSync('myReadMe.txt', {encoding: 'ucs-2'});

// console.log(data);

// fs.writeFileSync('myReadMe.txt', 'Adarsh');
// fs.appendFileSync('myReadMe.txt', 'Hello World');

// fs.unlinkSync('myReadMe.txt');

// const fs = require('fs');
// console.log('Start');
// const data = fs.readFileSync('./myReadMe.txt',{encoding: 'utf-8'});

// console.log(data);
// console.log('End');

// const fsPromises = require('fs/promises');
// console.log('Start');
// const pr = fsPromises.readFile('./myReadMe.txt', {encoding: 'utf-8'}); 
// pr.then((res) => {
//     console.log(res);
// })
// console.log('End');
// console.log(pr); 

// const fs = require('fs');
// fs.readFile('./myReadMe.txt',{encoding: "utf-8"}, (err, data) =>{
//     console.log(data);
// });



// const http = require('http');

// const app = http.createServer((req, res) => {
//     console.log('Request recived');
//     console.log(req.url);b 
//     res.end('<h3>Adarshh3>');
// });
// app.listen(3000);

// const http = require('http');

// const app = http.createServer((req, res) => {
//     console.log('Request recived');
//     console.log(req.url); 
//     res.setHeader('Content-Type', 'text/html');

//     res.end('<h3>hello</h3>');
// });
// app.listen(3000, () =>{
//     console.log('................ Server Start ....................');
// });




//.........................mini project.................................

const http = require('http');
const fs = require('fs');

const data = fs.readFileSync('data.json');
// const dataObj = JSON.parse(data);
const dataObj = JSON.parse(data);

// console.log(data);
console.log(dataObj);

const product = dataObj.products;

// const page = '<h1>Welcome</h1>';

const cardTemplate = `
<div class="container">
    <div class="card">
        <h1>_TITLE_</h1>
        <img src = "Img">
        <h3>Price _PRICE_</h3>
        <p>_DESCRIPTION_</p>
        <button src="cart">Add to Cart</button>
    </div>
</div>
`
const allCard = product.map(elem =>{
    let newCard = cardTemplate;
    newCard = newCard.replace('_TITLE_', elem.title);
    newCard = newCard.replace('_DESCRIPTION_', elem.description);
    newCard = newCard.replace('Img', elem.images[0]);
    newCard = newCard.replace('_PRICE_', elem.price);
    newCard = newCard.replace('cart', elem.id);

    return newCard;

})

const htmlTemplate = `
<!DOCTYPE html>
<html>
    <head>
        <title>Bloger's World</title>
        <style>

        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px;
        }
        
        .card {
            border: 1px solid #ccc;
            border-radius: 8px;
            padding: 16px;
            width: 300px; /* Fixed width for each card */
            margin-bottom: 16px; /* Optional: if you want some space between the rows */
            text-align: center;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        // .card {
        //     // float: left ;
        //     border: 1px solid #ccc;
        //     border-radius: 8px;
        //     padding: 16px;
        //     max-width: 300px;
        //     margin: auto;
        //     text-align: center;
        //     box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        // }
        
        .card h1 {
            color: #333;
            font-size: 24px;
            margin-bottom: 8px;
        }
        
        .card img {
            max-width: 100%;
            height: auto;
            margin-bottom: 8px;
        }
        
        .card h3 {
            color: #555;
            font-size: 18px;
            margin-bottom: 8px;
        }
        
        .card p {
            color: #666;
            font-size: 14px;
            line-height: 1.6;
        }
        

            // div{
            //     float: left;
            //     width: 300px;
            //     hight:600px;
            //     margin: 10px;
            // }
            // .card {
            //     border: 2px solid rgba(0,0,0,0.2);
            //     border-radius: 4px;
            //     padding: 20px;
            //     margin: 10px;
            //     max-width: 300px;
            //     max-hight:600px;
            //     align-iteam: center;
            //     text-align: center;
            // }
            // h1{
            //     font-weight: bold;
            // }
            // h3{
            //     color: #9d2235;
            // }
            // img{
            //     width: 50%;
            //     height: 50%;
            //     object-fit: cover;
            // }
        </style>
    </head>
    <body>
        _PRODUCTS_CARDS_

    </body>
</html>
`


const allCardstring = allCard.join();

// const card1 = cardTemplate.replace('_TITLE_', product[0].title)
// .replace('_DESCRIPTION_', product[0].description) 
// .replace('_PRICE_', product[0].price);

// const card2 = cardTemplate.replace('_TITLE_', product[1].title)
// .replace('_DESCRIPTION_',product[1].description) 
// .replace('_PRICE_', product[1].price)


const page = htmlTemplate.replace('_PRODUCTS_CARDS_',allCardstring);



const app = http.createServer((req, res) => {
    console.log('Request recived');
    console.log(req.url); 
    res.setHeader('Content-Type', 'text/html');

    res.end(page);
});
app.listen(3000, () =>{
    console.log('................ Server Start ....................');
});