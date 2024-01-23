import Header from "../../components/header"
import Collapse from "../../components/collapse"
import AboutImg from '../../assets/About-Header.png'

function About() {
    return (
        <div>
            <Header src={AboutImg} alt="Montagnes"/>
            <Collapse 
            CollapseTitle="Fiabilité" 
            CollapseText="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
 régulièrement vérifiées par nos équipes."
            />
            <Collapse 
            CollapseTitle="Respect" 
            CollapseText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse 
            CollapseTitle="Service" 
            CollapseText="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
            />
            <Collapse 
            CollapseTitle="Sécurité" 
            CollapseText="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes."
            />
        </div>
    )
}

export default About