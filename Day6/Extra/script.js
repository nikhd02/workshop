// const arr = [10,20,30];

// const ans = arr.map((a) => {
//     return a * 2;
// });
// console.log(ans); //[20,40,60]

// const arr = [10,11,22,33,44,55,66];
// console.log("Original array: ",arr);

// arr.push(77);
// console.log("\nAfter push operation :",arr);
// const ans = arr.filter((val)=> {
//     if(val>20)return true;
//     else return false;

// })

// console.log(arr);
// console.log(ans);

// const arr = ['delhi','Mumbai','Kolkata','Pune','India','Russia','USA'];

// const ans = arr.filter((val)=> {
//         if(val.includes('i'))return true;
//         else false;
// });
// console.log(`\nArray after filtering for 'i': `,ans);

// const arr = ['India,delhi','India,Mumbai','India,Kolkata','China,Jhong','China,Beijing','USA,New York','USA,Washington Dc'];

// const ans = arr.filter((val)=> {
//     const ns = val.toLowerCase();
//         if(ns.includes('india'))return true;
//         else false;
// });
// console.log(`\nArray after filtering for 'india': `,ans);

const arr = [10,22,34,50];
const sum = arr.reduce((accumulator,currentVal)=>{
    return accumulator + currentVal;
});
console.log(sum);