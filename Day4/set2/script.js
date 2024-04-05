// // const res = document.querySelector('div');
// // // res.remove()
// // const p = document.getElementsByTagName("p")[0];
// // res.removeChild(p);

// function getInfo (e){
// e.target.style.backgroundColor = 'yellow';
// // e.target.position
// // const d = document.querySelector("div");
// // d.prepend('Adarsh');
// }

const fistNameChange = (e) =>{
    console.log(e.target.value);
}
function ageCheck(e) {
    if (e.target.value > 18) {
        console.log("adult");
    } else {
        console.log("You are a minor, you can't vote!");
    }
}