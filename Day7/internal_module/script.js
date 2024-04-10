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

const http = require('http');

const app = http.createServer((req, res) => {
    console.log('Request recived');
    console.log(req.url); 
    res.setHeader('Content-Type', 'text/html');

    res.end('<h3>hello</h3>');
});
app.listen(3000, () =>{
    console.log('................ Server Start ....................');
});