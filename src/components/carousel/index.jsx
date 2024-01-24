import { useState } from 'react'
import LeftArrow from '../../assets/left-arrow.png'
import RightArrow from '../../assets/right-arrow.png'
import './style.scss'

function Carousel({Pictures, alt}) {
    let src = Pictures[0]
    const [index, setIndex] = useState(0)
    const length = Pictures.length
    const nextSlide = () => {
        setIndex((index+1)%length)
    }

    const prevSlide = () => {
        setIndex((index-1 + length)%length)
    }

    src = Pictures[index]

    return (
        <main className='Carousel'>
       <img src={LeftArrow} alt="left arrow" className='Carousel__arrow left' onClick={prevSlide}/>
       <img src={RightArrow} alt="right arrow" className='Carousel__arrow right' onClick={nextSlide}/>
       <img className='Carousel__img' src={src} alt={alt}/> 
       <p className='Carousel__numbers'>{index+1}/{length}</p>
       </main>
    )
}


export default Carousel