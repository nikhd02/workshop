// var figlet = require("figlet");

// figlet("Hello World!!", function (err, data) {
 
//   console.log(data);
// });

// fetch('https://api.github.com/users/deepak3440')
//     .then((res) =>{
//         return res.json();
//     })

// async function getApi(){
//     const pr = await fetch('https://api.github.com/users/deepak3440');
//     const data = await pr.json();
//     console.log(data);

// }

console.log('Start');
async function callAPI(){
  const pr = new Promise((res, rej) => {
    console.log('promise 1.....');
    setTimeout(() =>{
      console.log('timeout 1....');
    },3000);
  })
  
  const pr2 = new Promise((res, rej) => {
    console.log('promise 2.....');
    setTimeout(() =>{
      console.log('timeout 2....');
    },3000);
  })
}
callAPI();

console.log('End');
// getApi();