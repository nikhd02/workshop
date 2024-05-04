
const Card = (x) =>{
    console.log('props', x)
    return (<div>
    <h1>{x.title}</h1>
    <p>{x.prise}</p>
</div>)
}

export default Card;