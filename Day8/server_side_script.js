// console.log('hello');
const fs = require("fs");
const http = require("http")
const url = require('node:url');
const data = fs.readFileSync("./data.json", "utf-8");
const dataObj = JSON.parse(data).products;

// console.log(dataObj);

const cardTemplete = `
<div class="container">
    <div class="productcard">
        <h1>$Title</h1>
        <img src="Img" alt="img"/>
        <p>$Price</p>
        <p>$Rating</p>
        <a href="/product_links"><button>Add to Cart</button></a>
    </div>
</div>

`;

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
              width: 100%;
          }
  
        .productcard {
              border: 1px solid #ccc;
              border-radius: 8px;
              padding: 16px;
              width: calc(33.33% - 16px); 
              margin-bottom: 16px;
              text-align: center;
              box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }
  
        .productcard h1 {
              color: #333;
              font-size: 24px;
              margin-bottom: 8px;
          }
  
        .productcard img {
              max-width: 100%;
              height: auto;
              margin-bottom: 8px;
          }
  
        .productcard h3 {
              color: #555;
              font-size: 18px;
              margin-bottom: 8px;
          }
  
        .productcard p {
              color: #666;
              font-size: 14px;
              line-height: 1.6;
          }
  
          header{
              color:white;
              font-size:;
              background-color: black;
              padding: 10px;
              border:4px solid white;
              border-radius: 10px;
              margin: 10px;
          }
          </style>
        </head>
    <body>
        <header>Product
        <form style=" text-align:right; ">
        <input type="text" name="search" id="search" placeholder="Search">
        <input type="submit" value="Search">
        </form>
        </header>
        _PRODUCTS_CARDS_

    </body>
</html>
`

let result = [];

for(let i=0;i<dataObj.length;i++){

    let temp = cardTemplete;
    temp = temp.replace("$Title", dataObj[i].title)
    temp = temp.replace("Img", dataObj[i].images[0])
    temp = temp.replace("$Price", dataObj[i].price)
    temp = temp.replace("$Rating", dataObj[i].rating)
    temp = temp.replace("$Description", dataObj[i].description)
    temp = temp.replace('product_links', `product?id=${i}`);

    result.push(temp);
    
    
}

result = result.join(' ');
result = htmlTemplate.replace('_PRODUCTS_CARDS_', result)
// console.log(result);

const server = http.createServer((req, res) =>{
    // res.writeHead(200, { 'Content-Type': 'text/html' });
    const route = req.url;
    const path = url.parse(route, true);
    const q = path.query

    console.log(route, "\n\n");
    console.log(path);

    if(path.pathname == "/home"){
        res.end(result);
    }
    else if(path.pathname == "/product"){
        const id = q.id;
        const iteam = dataObj[id];
        res.end(`
            <div style=" display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 16px; ">
                <div style="  border: 1px solid #ccc;
                border-radius: 8px;
                padding: 16px;
                width: 300px; /* Fixed width for each card */
                margin-bottom: 16px; /* Optional: if you want some space between the rows */
                text-align: center;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1); ">
                    <h2>${iteam.title}</h2>
                    <img style=" max-width: 100%;
                    height: auto;
                    margin-bottom: 8px; " src="${iteam.images[0]}" alt="">
                    <p>${iteam.description}</p>
                    <h3>${iteam.price}</h3>
                    <a href="/home"><button>Back to home</button></a>
                </div>
            </div>
        `);
        
    }
    else{
        res.end(`<h1>404 not found</h1>`);
    }
});
server.listen(3001, () => {
    console.log("server is running on port 3001");
}) 