import MovieCard from '../MovieCard';
import { StyledShowMovies } from './styles';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../context';
import { BsExclamationTriangle } from 'react-icons/bs';

const ShowMovies = () => {

    const { fav } = useContext(Context);

    const [movies, setMovies] = useState([]);
    const [index, setIndex] = useState(20);
    const [showMessage, setShowMessage] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        setMovies(fav.slice(0, index));
    }, [fav, index])

    useEffect(() => {
        if (index < fav.length - 1) {
            setShowButton(true);
        }
    }, [fav])

    const handleClick = () => {


        setIndex((index) => {

            if (index + 10 > fav.length) {
                setShowMessage(true);
                return fav.length;
            }
            else {
                return index + 10;
            }

        });
    }

    return (
        <StyledShowMovies>
            <div className='card-container'>
                {
                    movies.map(movie => <MovieCard movie={movie} />)
                }
            </div>
            {
                fav.length > 0 && showButton && (
                    <div className='load-more'>
                        {!showMessage ? (
                            <button
                                className='load-more-btn'
                                onClick={handleClick}
                            >
                                Load more movies
                            </button>
                        ) : (
                            <p className='message'>
                                <BsExclamationTriangle />
							No more results
                            </p>
                        )}
                    </div>
                )
            }
        </StyledShowMovies>
    )
}

export default ShowMovies;
