import Header from "../../components/header"
import Card from "../../components/card"
import Houses from "../../datas/logements"
import HomeImg from '../../assets/Home-Header.png'
import { Link } from "react-router-dom";
import "./style.scss"

function Home() {
    return (
        <div className="home">
            <Header src={HomeImg} alt="falaises en bord de mer" text="Chez vous, partout et ailleurs"/>
            <ul className="cards-grid">
                {Houses.map((house) => (
                    <li>
                        <Link to={'/house/' + house.id} key={house.id}>
                            <Card 
                                title={house.title} 
                                cover={house.cover}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home