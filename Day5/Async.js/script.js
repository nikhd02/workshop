// console.log('GEC Start');

function printPretty(){
    console.log('prettyStart');
    let ans = 2+3;
    console.log(ans);
    console.log('prettyEnd');
}

// setTimeout(printPretty,1000);
// console.log('GEC End');

const btn = document.getElementById('btn');
btn.addEventListener("click", printPretty)