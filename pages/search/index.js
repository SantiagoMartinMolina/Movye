import { useEffect, useState } from 'react';
import axios from '../../axios';
import Layout from '../../components/Layout';
import MovieCard from '../../components/MovieCard/index';
import { StyledSearch } from './styles';
import { ImSpinner2 } from 'react-icons/im';
import { GoSearch } from 'react-icons/go';
import { BsExclamationTriangle } from 'react-icons/bs';

const Search = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = (ev) => {
        setInput(ev.target.value);
    }

    useEffect(() => {
        if (pageNumber > 1 && input.length > 0) {
            const request = async () => {
                setIsLoading(true);
                let response = (await axios.get(`/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${input}&page=${pageNumber}&include_adult=false`)).data;
                if (response.results.length > 0) {
                    setResults(prev => [...prev, ...response.results]);
                } else {
                    setShowMessage(true);
                }
                setIsLoading(false);
            }
            request();
        }
    }, [pageNumber])

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        if (input.length > 0) {
            setShowMessage(false);
            try {
                let response = (await axios.get(`/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`)).data;
                setResults(response.results);
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        < Layout >
            <StyledSearch>
                <form className='form' onSubmit={handleSubmit}>
                    <input type="text" placeholder='Buscar una pelicula...' value={input} onChange={handleChange} />
                    <GoSearch />
                </form>
                <div className='card-container'>
                    {results.length > 0 && results.map(movie => <MovieCard movie={movie} key={movie.id} />)}
                </div>
                <div className='load-more'>
                    {!showMessage
                        ? <button
                            className='load-more-btn'
                            disabled={isLoading ? true : null}
                            onClick={() => setPageNumber((n) => n + 1)}
                        >
                            {isLoading ? <ImSpinner2 /> : 'Load more movies'}
                        </button>
                        : <p className='message'><BsExclamationTriangle />No more results</p>}

                </div>
            </StyledSearch>
        </Layout >
    )
}

export default Search;


