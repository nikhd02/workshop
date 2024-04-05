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

// const fistNameChange = (e) =>{
//     const n= e.target.value;
//     while(true)
//     {
//     if(n.length>3)
//     {
//         document.getElementById("Btn1").disabled = false;
//     }
// }
// }
// function ageCheck(e) {
//     if (e.target.value > 18) {
//         console.log("adult");
//     } else {
//         console.log("You are a minor, you can't vote!");
//     }
// }

function submitForm(e){
    e.preventDefault();
    const t = e.target;
    const res = {
        hobbies: [],
    }
    for(let i=0 ;i<t.legth;i++){
        const ty  = t.elements[i].type;
        if(ty === "checkbox"){
            if(t.elements[i].checked ) {
                res.hobbies.push(t.elements[i].value);
            }
            
        }else{
            res [t.elements[i].name] = t.elements[i].value;
        }
    }
   console.log(res);
}