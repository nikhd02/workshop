import ReactDOM from 'react-dom/client';
import React from 'react';
// import Card from '../Session2/src/pages/home_pages/card'
import HomePage from './src/pages/home_pages/home_page';
import ProductPage from './src/pages/product_page/product_page';
import SearchPage from './src/pages/search_page/search_page';

const parent = document.getElementById('root');
const root = ReactDOM.createRoot(parent);

// const heading = React.createElement('h1', {}, "Hellow from React!");

// const Card = (x) =>{
//     console.log('props', x)
//     return (<div>
//     <h1>{x.title}</h1>
//     <p>{x.prise}</p>
// </div>)
// }

// const obj = [
//     {
//     title: 'John',
//     prise: '20',
//     },
//     {
//         title: 'Phone',
//                     prise: '20',
//     },
//     {
//         title: 'Mixer',
//                     prise: '20',
//     }
// ]
const App =()=>{
    // return (<div>
    //     <h1>Hello from React 1!</h1>
    //     {Card(obj)}
    //     {
    //         obj.map((x)=>{
    //             return <Card key={x.title} title={x.title} prise={x.prise}/>
    //         })
    //     }
        {/* <Card title='jhon' prise='43,230'/>
        <Card title='Phone' prise='40,030'/>
        // <Card title='Mixer' prise='10,500'/> */}
    // </div>
    // )
        let path = window.location.pathname;
    return (
        <>
            {path === '/'&&<HomePage/>}
            {path === '/products'&&<ProductPage/>}
            {path === '/search'&&<SearchPage/>}
            {/* <Footer/> */}
        </>
    );
    // <HomePage/>
}

// console.log(Heading())
root.render(<App/>);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import ProductMain from './src/pages/product_page/product_page';

// const parent = document.getElementById('root');
// const root = ReactDOM.createRoot(parent);

// const App = () => {
//     return <ProductMain />;
// }

// root.render(<App />);