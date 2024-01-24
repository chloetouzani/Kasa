import { useParams } from "react-router-dom"
import Carousel from "../../components/carousel"
import Houses from "../../datas/logements"
import "./style.scss"
import Collapse from "../../components/collapse"
import Tag from "../../components/tag"

function House() {
    const {id} = useParams()
    const FoundHouse = Houses.filter(OkId => OkId.id === id)[0];
    return (
        <main className="house">
            <Carousel Pictures={FoundHouse.pictures} alt={FoundHouse.title} />
            <section className="house__infos">
                <div>
                    <h1>{FoundHouse.title}</h1>
                    <p>{FoundHouse.location}</p>
                    <div>
                        <Tag TagText={FoundHouse.tags}/>
                    </div>
                </div>
                <figure>
                    <img src={FoundHouse.host.picture} alt={FoundHouse.host.name}/>
                    <figcaption>{FoundHouse.host.name}</figcaption>
                </figure>

            </section>
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