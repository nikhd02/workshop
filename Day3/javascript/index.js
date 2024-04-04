

// var massage = 'Hello World!';
// console.log(massage);

// //looswly typed
// // strictky typed
// // statically typed
// // dynamically typed

// var massage = 'else';
// console.log(massage);

// function evn(){
// var massage = 'Hello World!';
// console.log(massage);

// //looswly typed
// // strictky typed
// // statically typed
// // dynamically typed

// var massage = 'else';
// console.log(massage);

// for  (let i=0;i<5;i++){
//     var m= 2*i;
//     console.log(m);
// }
// }
// function odd(num){
//     if(num % 2 == 1) {
//         console.log('The number is odd');
//     } else{
//         console.log('The number is even')
//     }

// }
// const num = prompt("Please enter your name:");

// evn();
// //odd();
// const x="Adarsh Dubey";
// console.log(typeof(x));


// // let obj={name:'adarsh',age:25,city:"Delhi"};
// // console.log(obj);

// // console.log(obj.name + "is "+ obj.age+ " years old and lives in"+ " "+ obj.city);

// // //accessing object property
// // console.log(obj['name']);

// // //object destructuring
// // const person ={
// //     firstName :'Adarsh',
// //     lastName :'Dubey',
// //     age :25
// // }
// // const {firstName ,lastName ,age}=person ;
// // console.log(`${firstName} ${lastName}, Age=${age}`);
// // console.log(obj.name);

// let arr = [3,4,6,7,8];
// arr.push(9);
// console.log(arr);
// let sum=0;
// for (let i=0;i<arr.length;i++){
//    sum+=arr[i]
// }
// console.log(sum) 

// let str = '12';

// let age = 20;

// console.log(+str+age);

// function isLeapYear(year){
//     if((year % 4 == 0 && year % 100 != 0 ) || (year % 400 == 0)){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isLeapYear(2004));

// function getDaysInMonth(month,year){
//     var daysInMonth=[0,31,28,31,30,31,30,31,31,30,31,30,31];
//     if(isLeapYear(year)&& month==2)
//         return 29;
//     else
//         return daysInMonth[month];
// }

// console.log(getDaysInMonth(2,2000))

//var d = new Date();

// var n = d.getDay();
// var m = d.getMonth() + 1;    
// var y = d.getFullYear();    

// console.log("Today is " +" "+d.toDateString());

// function print(){
//     console.log('~~~~~');

// }

// const b = function (){
//     console.log('printed from inner func');
// }

// const c = () => {
//     console.log('printed from inner func');
// }

// print();
// b();
// c();

// let a=5;
// switch(a){
//     case(1):
//         console.log('one');
//         break;
//     case(2):
//         console.log('two');
//         break;
//     default:
//         console.log('none of the above');
//         break;
// }

// const obj = {
//     1 : 'one',
//     'two' : 'two',
//     3.14: 'pi',
//     10:"ten",
//     'name': 'John'
    
// };

// console.log(obj);
const num = prompt();
const obj = {
        1 : 'one',
        'two' : 'two',
        3.14: 'pi',
        10:"ten",
        'name': 'John'
        
    };


console.log(obj[num]) 
