
import { StyledSlider } from './styles';
import { BsCalendar } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { movies } from '../../utils/movies'


const Slider = () => {
    const idx = Math.round(Math.random() * (movies.length - 1));
    const movie = movies[idx];
    const { title, year, description, image, trailer, rating } = movie;
    return (
        <StyledSlider bgImage={image}>
            <div className='info'>
                <h1>{title}</h1>
                <div className='data'>
                    <p><BsCalendar />{year}</p>
                    <p><AiFillStar />{rating}</p>
                </div>
                <p className='description'>{description}</p>
            </div>
        </StyledSlider>
    )
}

export default Slider;