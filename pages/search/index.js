import { useEffect, useState, useContext } from 'react';
import axios from '../../axios';
import Layout from '../../components/Layout';
import MovieCard from '../../components/MovieCard/index';
import { StyledSearch } from '../../styles/styles';
import { ImSpinner2 } from 'react-icons/im';
import { GoSearch } from 'react-icons/go';
import { BsExclamationTriangle } from 'react-icons/bs';
import { Context } from '../../context';

const Search = () => {
    const [input, setInput] = useState('');
    const [results, setResults] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [actors, setActors] = useState([]);

    const { genres, setGenres } = useContext(Context);

    useEffect(() => {

        Promise.all([
            axios.get(`/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`),
            axios.get('/person/popular?api_key=9ca328af7c78baabe047a77c3ca0675e&language=en-US&page=1')
        ])
            .then((arrayData) => {
                setGenres(arrayData[0].data.genres);
                setActors(arrayData[1].data.results);
            });
    }, [])

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

    const handleChange = (ev) => {
        setInput(ev.target.value);
    }


    const handleSubmit = async (ev) => {
        ev.preventDefault();
        if (input.length > 0) {
            setShowMessage(false);
            setShowResults(true);
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
                {
                    showResults
                        ?
                        <section>
                            <div className='card-container'>
                                {results.length > 0 ? results.map(movie => <MovieCard movie={movie} key={movie.id} />) : <p>No hay resultados</p>}
                            </div>
                            {
                                results.length > 0 &&
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
                            }
                        </section>
                        :
                        <section>
                            <div className='filter'>
                                {
                                    genres.map(g => <p>{g.name}</p>)
                                }
                            </div>
                            <div className='filter'>
                                {
                                    actors.map(g => <p>{g.name}</p>)
                                }
                            </div>

                        </section>
                }
            </StyledSearch>
        </Layout >
    )
}
// /discover/movie?api_key=9ca328af7c78baabe047a77c3ca0675e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16
// /person/popular?api_key=9ca328af7c78baabe047a77c3ca0675e&language=en-US&page=1
export default Search;


