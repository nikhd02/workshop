// // import Navbar from "../../common/Navbar/navbar";
// // import './historystyle.css';

// // const dummyData = [
// //     {
// //         id: '1',
// //         title: 'Flower',
// //         date: '21-02-24'
// //     },
// //     {
// //         id: '2',
// //         title: 'Laptop',
// //         date: '21-02-24'
// //     },
// //     {
// //         id: '3',
// //         title: 'Nature',
// //         date: '21-02-24'
// //     },
// //     {
// //         id: '4',
// //         title: 'MObile',
// //         date: '21-02-24'
// //     },
// // ]

// // const History = () => {
// //     return (
// //         <div >
// //             <Navbar />
// //             <div className="mainContent">
// //                 <div>
// //                     {
// //                         dummyData.map((item) => {
// //                             return (
// //                                 <div className="history-card">
// //                                     <div className="history-card-title">{item.title}</div>
// //                                     <div className="history-card-date">{item.date}</div>
// //                                 </div>
// //                             )
// //                         })
// //                     }
// //                 </div>
// //             </div>

// //         </div>
// //     )
// // }

// // export default History


// import Navbar from "../../common/Navbar/navbar";
// import {useState, useEffect} from "react";
// import "./historystyle.css";

// const HistoryPage = () => {
//     // let data = [
//     //     {'id':'1', title:'hello'},
//     //     {'id':'2', title:'world'},
//     // ];
//     const [data, setData] = useState([{'id':'1', title:'hello'},{'id':'2', title:'world'}]);

//     const getData = async() => {
//         const res = await fetch('https://dummyjson.com/products');
//         const obj = await res.json();
//         // data = obj.products;
//         setData(obj.products);
//         console.log(data);
//     }
//     useEffect(() => {
//         getData();
//     }, []);

//     return (
//         <div>
//             <Navbar />
//             <div className="history-container">
//                 {data.map((item)=>(
//                         <div key={item.id}>
//                             {item.title}
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     )
// };

// export default HistoryPage;



import Navbar from "../../common/Navbar/navbar";
import {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
import "./historystyle.css";

const HistoryPage = () => {
    const [data, setData] = useState([]);
    const [searchText, setSearchText] = useState("");


    const getData = async () => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
        const obj = await res.json();
        setData(obj.products);
        console.log('getData:: ', data);
    }

    useEffect(()=>{
        getData();
    }, [searchText]);

    console.log('normal rendering flow', data);

    return (
        <div>
            <Navbar />
            <input onChange={(e)=>{setSearchText(e.target.value);}}/>
            <div className="history-main-container">
                {data.map((item)=>{
                    return(
                        <div className='history-card'>
                            <img className="Pic" src={item.thumbnail}/>
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <Link to={`/history/${item.id}`}>More</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default HistoryPage;