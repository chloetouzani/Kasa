import './style.scss'

function Cards({title, cover}) {
    return (
        <figure className='Cards'>
            <img className='Cards__img' src={cover} alt={title}/>
            <figcaption className='Cards__text'>{title}</figcaption>
        </figure>
    )
}

export default Cards