
import { StyledSlider } from './styles';
import { BsCalendar } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';


const Slider = ({ bgImage }) => {
    return (
        <StyledSlider bgImage={bgImage}>
            <div className='info'>
                <h1>Titulo de la pelicula Titulo de la pelicula Titulo de la pelicula</h1>
                <div className='data'>
                    <p><BsCalendar />1966</p>
                    <p><AiFillStar />7.6</p>
                </div>
                <p className='description'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit velit molestiae dolorum, quibusdam commodi sequi dolor voluptatibus cum beatae repudiandae adipisci repellendus earum, reiciendis laboriosam ea aspernatur odio animi.
                </p>
            </div>
        </StyledSlider>
    )
}

export default Slider;