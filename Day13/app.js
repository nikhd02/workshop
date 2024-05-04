// const parent = document.getElementById('root');
// const root = ReactDOM.createRoot(parent);
// // parent.innerHTML = `
// // <h1>Hello world</h1>
// // <ul>
// //     <li>Item 1</li>
// //     <li>Item 2</li>
// // </ul>`

// // const heading = document.createElement('h1');
// // heading.innerText = 'Hello from js Dome';
// // parent.appendChild(heading);

// // const list = document.createElement('ul');
// // const listItem1 = document.createElement('li');
// // listItem1.innerText = 'Item 1';
// // const listItem2 = document.createElement('li');
// // listItem2.innerText = 'Item 2';
// // list.appendChild(listItem1);
// // list.appendChild(listItem2);
// // parent.appendChild(list);

// const li1 =React.createElement('li', {
//     key:'li1',
//     className :'li-c-1',
//     id: 'id1',
//     style:{
//         color:'red',
//         fontSize:'20px'
//     }
// }, "Item 1");
// const li2 =React.createElement('li', {key:'li2'}, "Item 2");
// const list = React.createElement('ul', {}, [li1,li2]);
// root.render(list);


const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

// const heading = React.createElement('h1', {}, "Helo grom react");

const str = {hello: 'World', name:'Adarsh'};
const s1 = {
    bacgroundColor:'black',
    color:'red',
    fontSize:'20px',
    border: '2px solid red'
}

const heading = <h1>Hello from React!</h1>
const li1= <li className="li-c-1" name={str} style={s1}>Item 1</li>
const li2 = <li>Item 2</li>
const arr = [li1,li2];
const list = <ul>{arr.map((elem)=>{return elem;})}</ul>
// const list = <ul>{[heading,li1,li2]}</ul>

root.render(list)