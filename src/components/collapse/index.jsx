import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

function Collapse({CollapseTitle, CollapseText}) {
    const [isRotated, setIsRotated] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const handleRotate = () => {
        setIsRotated(!isRotated);
        setIsOpen(!isOpen);
      };

    return (
        <section className="collapse">
            <div className='collapse__title' onClick={handleRotate}>
                <h2>{CollapseTitle}</h2>
                <div  className={`collapse__icon ${isRotated ? 'collapse__icon--rotated' : ''}`}>
                    <FontAwesomeIcon icon={faChevronUp}/> 
                </div>
            </div>
            {isOpen && 
                (CollapseTitle === 'Equipements' ? <ul className='collapse__text'>{CollapseText.map((text) => (<li key={text}>{text}</li>))}</ul> : <p className="collapse__text collapse__text--open">{CollapseText}</p>)
            }
        </section>
    )
}

export default Collapse