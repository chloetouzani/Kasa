import './style.scss'

function Card({title, cover}) {
    return (
        <figure className='Cards'>
            <img className='Cards__img' src={cover} alt={title}/>
            <figcaption className='Cards__text'>{title}</figcaption>
        </figure>
    )
}

export default Card