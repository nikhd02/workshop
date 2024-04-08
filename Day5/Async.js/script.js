// console.log('GEC Start');

// // function printPretty(){
// //     console.log('prettyStart');
// //     let ans = 2+3;
// //     console.log(ans);
// //     console.log('prettyEnd');
// // }

// // // setTimeout(printPretty,1000);
// console.log('GEC End');

// // const btn = document.getElementById('btn');
// // btn.addEventListener("click", printPretty)

// console.log('GEC Start');

//     const req = fetch("https://api.github.com/users/deepak3440");
//     console.log(req);
//     req.then(() => console.log("Promise is resolved"));
// console.log('GEC End');

// console.log('GEC Start');
// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))
// console.log('GEC End');

// console.log('GEC Start');
// const req = fetch('https://dummyjson.com/products/1')
// const res = req.then(res => res.json())
// res.then((data) => console.log(data))
// console.log('GEC End');

console.log('GEC Start');
const req = fetch('https://dummyjson.com/products/1').then(res => res.json()).then((data) => console.log(data));
console.log('GEC End');