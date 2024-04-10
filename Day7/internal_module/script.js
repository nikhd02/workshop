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



const htmlTemplate = `
<!DOCTYPE html>
<html>
    <head>
        <title>Bloger's World</title>
    </head>
    <body>
        _PRODUCTS_CARDS_
    </body>
</html>
`

const cardTemplate = `
    <div class="card">
        <h1>_TITLE_</h1>
        <h2>_DESCRIPTION_</h2>

        <h3>_PRICE_</h3>
    </div>
`


const card1 = cardTemplate.replace('_TITLE_', product[0].title)
.replace('_DESCRIPTION_', product[0].description) 
.replace('_PRICE_', product[0].price);

const card2 = cardTemplate.replace('_TITLE_', product[1].title)
.replace('_DESCRIPTION_',product[1].description) 
.replace('_PRICE_', product[1].price)


const page = htmlTemplate.replace('_PRODUCTS_CARDS_',card1+card2);



const app = http.createServer((req, res) => {
    console.log('Request recived');
    console.log(req.url); 
    res.setHeader('Content-Type', 'text/html');

    res.end(page);
});
app.listen(3000, () =>{
    console.log('................ Server Start ....................');
});