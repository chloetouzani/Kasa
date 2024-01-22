import Header from "../../components/header"
import Cards from "../../components/cards"
import Houses from "../../datas/logements"
import "./style.scss"

function Home() {
    return (
        <body>²
            <Header />
            <div className="cards-grid">
            {Houses.map((house, index) => (
            <Cards 
            key={`${house.name}-${index}`}
            title={house.title} 
            cover={house.cover}/>
            ))}
            </div>
        </body>
    )
}

export default Home