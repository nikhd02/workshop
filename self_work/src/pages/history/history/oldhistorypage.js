// import Navbar from "../../common/Navbar/navbar";
// import {useState, useEffect} from "react";
// import "./historystyle.css";

// // // // const dummyData = [
// // // //     {
// // // //         id:'1',
// // // //         title:'Flower',
// // // //         date: {
// // // //             day: 'Sun',
// // // //             time: '21:00',
// // // //         },
// // // //     },
// // // //     {
// // // //         id:'2',
// // // //         title:'Electronics',
// // // //     },
// // // // ];
// // // // const changeTitle = ()=>{console.log('Title changed');}
// // // // const changeDescription = ()=>{console.log('Description changed');}

// // // // const temp = ()=>{
// // // //     changeTitle(); 
// // // //     changeDescription();
// // // // }

// // const HistoryPage = () => {
// //     const[title, setTitle] = useState("Images");
// //     const[description, setDescription] = useState("These are Images");

// // // setTimeout(func,time)

// //     useEffect(()=>{
// //         console.log('Nothing = Every time when the page is re0-rendered')
// //     });

// //     useEffect(()=>{
// //         console.log('Only when the page is rendered first time')
// //     },[]);

// //     useEffect(()=>{
// //         console.log('Only when "title" is changed')
// //     },[title]);

// //     useEffect(()=>{
// //         console.log('When "title" _or_ "description" is changed')
// //     },[title, description]);


// //     return (
// //         <div>
// //             <Navbar />
// //             <div className="history-main-container">
// //                 {/* <button onClick={changeTitle}>Change title</button> <br/>
// //                 <button onClick={temp}>Change title and Description</button> <br/>
// //                 <button onClick={changeDescription}>Change Description</button> <br/> */}

// //                 <input value={title} onChange={(e)=>{setTitle(e.target.value)}}/><br />
// //                 <input  value={description} onChange={(e)=>{setDescription(e.target.value)}}/><br />

// //                 <h3>Title = {title}</h3>
// //                 <h3>description = {description}</h3>

// //                 {/* <div>
// //                     {dummyData.map((elem)=>{
// //                             return(
// //                                 <div key={elem.id}>
// //                                     <h3>{elem.title} hello</h3>
// //                                     <p>{elem.date?.day}</p>
// //                                     <p>{elem.date?.time}</p>
// //                                 </div>
// //                             )
// //                         })
// //                     }
// //                 </div> */}
// //             </div>
// //         </div>
// //     )
// // };

// // export default HistoryPage;



// const OldHistory = () => {

//     const [data, setData] = useState([]);
//     const [searchText, setSearchText] = useState("");

//     const getData = async () => {
//         const res = await fetch('https://dummyjson.com/products/search?q=${searchText}');

//         const obj = await res.json();
//         setData(obj.products);
//         console.log(data);
//     }

//     useEffect(() => {
//         getData(searchText);
//     }, [searchText])

//     // getData();


//     return (
//         <div >
//             <Navbar />
//             <input onChange={(e) => {
//                 setSearchText(e.target.value)
//             }} />
//             <div className="history-container">
//                 <h2>Image Generator</h2>
//                 {data.map((item) => {
//                     return (

//                         <div className="history-cart">
//                             <h3>{item.title}</h3>
//                             <p>{item.description}</p>
//                         </div>
//                     )
//                 })}

//             </div>

//         </div>
//     )
// };


// export default OldHistory;