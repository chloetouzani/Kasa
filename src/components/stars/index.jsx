import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import "./style.scss"

function Stars({ rating }) {
    const redStars = Array.from({ length: rating }, (_, index) => (
        <FontAwesomeIcon key={`red-star-${index}`} icon={faStar} />
    ));
    const grayStars = Array.from({ length: 5 - rating }, (_, index) => (
        <FontAwesomeIcon key={`gray-star-${index}`} color="#E3E3E3" icon={faStar} />
    ));

    return (
        <div className='stars'>
            {redStars}{grayStars}
        </div>
    );
}

export default Stars