// console.log('hello');
const fs = require("fs");
const http = require("http")
const url = require('node:url');
const data = fs.readFileSync("./data.json", "utf-8");
const dataObj = JSON.parse(data).products;

// console.log(dataObj);

const cardTemplete = `

    <div class="product-card">
        <h3>$Title</h3>
        <img src="Img" alt="img"/>
        <a href="/product_links">Read more</a>
        <p>$Description</p>
        <p>$Price</p>
        <p>$Rating</p>
    </div>

`;

let result = [];

for(let i=0;i<dataObj.length;i++){

    let temp = cardTemplete;
    temp = temp.replace("$Title", dataObj[i].title)
    temp = temp.replace("Img", dataObj[i].images[0])
    temp = temp.replace('product_links', `product?id=${i}`);
    result.push(temp);
    
    
}

result = result.join(' ');
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
            <div>
                <h4>${iteam.title}</h4>
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