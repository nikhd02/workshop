import Carousal from "./carousal";
import Catgegory from "./catgegoryRow";
import Navbar from "./navbar";
import Card from "./card";

const HomePage = () => {
    return(
        <div>
            <Navbar />
            <Catgegory />
            <Carousal />
            <Card />
        </div>

        // <div>HomePage</div>
    );
}

export default HomePage;