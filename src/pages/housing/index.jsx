import { useParams } from "react-router-dom"
import Carousel from "../../components/carousel"
import Houses from "../../datas/logements"
import Error from "../error"
import "./style.scss"
import Collapse from "../../components/collapse"
import Tag from "../../components/tag"
import Stars from "../../components/stars"

function House() {
    const {id} = useParams()
    const FoundHouse = Houses.filter(OkId => OkId.id === id)[0];
    if (FoundHouse === undefined) {
        return <Error/>
    }
    return (
        <main className="house">
            <Carousel Pictures={FoundHouse.pictures} alt={FoundHouse.title} />

            <div className="house__infos">
                <section>
                    <h1>{FoundHouse.title}</h1>
                    <p>{FoundHouse.location}</p>
                    <Tag TagText={FoundHouse.tags}/>
                </section>

                <div className="host-infos">
                <figure>
                    <img src={FoundHouse.host.picture} alt={FoundHouse.host.name}/>
                    <figcaption>{FoundHouse.host.name}</figcaption>
                </figure>
                <Stars rating={FoundHouse.rating}/>
                </div>
            </div>

            <div className="house__collapse">
                <Collapse CollapseTitle="Description" CollapseText={FoundHouse.description}/>
                <Collapse 
                CollapseTitle="Equipements" 
                CollapseText={FoundHouse.equipments}/>
            </div>
        </main>
    )
}

export default House