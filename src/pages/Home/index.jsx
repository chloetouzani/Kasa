import Header from "../../components/header"
import Cards from "../../components/cards"
import Houses from "../../datas/logements"
import { Link } from "react-router-dom";
import "./style.scss"

function Home() {
    return (
        <div>
            <Header />
            <div className="cards-grid">
                {Houses.map((house, index) => (
                    <Link to='/house'>
                        <Cards 
                            key={`${house.name}-${index}`}
                            title={house.title} 
                            cover={house.cover}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Home