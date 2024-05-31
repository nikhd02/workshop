
const Navbar = () => {
    return (
        <div className="headerContainer">
            {/* <div className="left">
                <a href="/">Home</a>
                <a href="/image-generator">Image</a>
                <a href="/home">Contact</a>
            </div> */}
            <div className="left">
                <a href="/">Home</a>
                <a href="/image-generator">Image</a>
                <a href="/history">History</a>
                <a href="/oldHistory">OldHistory</a>
            </div>
            <div className="right">
                {/* <input  placeholder="Search" 
                    /> */}
                <img className="navimg" src="https://static.timesofisrael.com/www/uploads/2019/12/iStock-1029035836-e1575983057612.jpg"/>
            </div>
        </div>

    )
}

export default Navbar;