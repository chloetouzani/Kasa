import { useParams } from "react-router-dom"
import Carousel from "../../components/carousel"
import Houses from "../../datas/logements"

function House() {
    const {id} = useParams()
    const FoundHouse = Houses.filter(OkId => OkId.id === id)[0];
    return (
        <div>
            <Carousel Pictures={FoundHouse.pictures} alt={FoundHouse.title} />
            <p>{FoundHouse.title}</p>

        </div>
    )
}

export default House