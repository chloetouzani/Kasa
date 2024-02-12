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
  <section className='collapse'>
    <div className='collapse__title' onClick={handleRotate}>
      <h2>{CollapseTitle}</h2>
      <div  className={`collapse__icon ${isRotated ? 'collapse__icon--rotated' : ''}`}>
        <FontAwesomeIcon icon={faChevronUp}/> 
      </div>
    </div>
    <div className={`collapse__text-box ${isOpen ? 'collapse__text-box--open' : 'collapse__text-box--close'}`}>
      {(CollapseTitle === 'Equipements' ? 
      <ul>{CollapseText.map((text) => (<li key={text}>{text}</li>))}</ul> 
      : <p>{CollapseText}</p>)}
    </div>
  </section>
)
}

export default Collapse