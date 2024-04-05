// // const obj ={
// //     "name": "Adarsh",
// //     "age" : 25,
// //     "city":"Bangalore"
// // }
// // obj.name =20;
// // console.log(obj); // { name: 20, age: 25, city: 'Bangalore' }

// // let arr = [1,4,6,8];
// // console.log(arr);
// // let res = Array.isArray(arr) ? `Yes it is an array` : `No its not an array`;
// // console.log(`Is the given object an array? ${res}`);

// // function checkifObject(obj) {
// //     if  (typeof obj === 'object') {
// //         return true;}
// //     else{
// //         return false;
// //     }
// // }
// // console.log(checkifObject("Adarsh"));
// // const arr = [1,2,3,4,5];
// // const obj = {
// //     "name":"Adarsh","city":"varanasi"
// // };

// // for(let i of arr){
// //     console.log(i);
// // }
// // for(let i of obj){
// //     console.log(i);
// // }

// // for(let i in arr){
// //     console.log(i);
// // }
// // for(let i in obj){
// //     console.log(i);
// // }/
// // console.log(window.document)
// // console.log(document)

// // console.dir(window.document)
// // console.dir(document)

// // const res = document.getElementsByTagName('h3')
// // console.log(res);

// // const res = document.getElementById('ht1');
// // console.log(res);

// // const rets = document.getElementById("ht1");
// // rets.innerText = "Hello World";
// // console.log(rets);

// const res =document.getElementsByTagName("div");
// res[0].innerHTML = "<h4>This is a heading</h4>";
// //res[0].innerText = "<h4>This is a heading</h4>";

// console.log(res);

// const ne = document.createElement("p");
// ne.innerText = "Dynamic text";
// console.log(ne);
// document.body.appendChild(ne);

const ne =document.createElement("h3");
// ne.innerText = "Dynamic Text";
// console.log(ne);
// const firstDiv = document.getElementsByTagName("div");
// firstDiv[1].appendChild(ne);

const firstDiv = document.getElementsByTagName("div");
firstDiv.removeChild(ne);