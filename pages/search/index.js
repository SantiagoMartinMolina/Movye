import { useEffect, useState, useContext } from 'react';
import axios from '../../axios';
import Layout from '../../components/Layout';
import FilterButton from '../../components/FilterButton';
import MovieCard from '../../components/MovieCard/index';
import { StyledSearch } from '../../styles/search';
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
	const [indexGenres, setIndexGenres] = useState(0);
	const [indexActors, setIndexActors] = useState(0);

	const { genres, setGenres } = useContext(Context);

	useEffect(() => {
		Promise.all([
			axios.get(
				`/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
			),
			axios.get(
				'/person/popular?api_key=9ca328af7c78baabe047a77c3ca0675e&language=en-US&page=1'
			),
		])
			.then((arrayData) => {
				setGenres(arrayData[0].data.genres);
				setActors(arrayData[1].data.results);
			})
			.catch((err) => console.error(err));
	}, []);

	useEffect(() => {
		if (pageNumber > 1 && input.length > 0) {
			const request = async () => {
				setIsLoading(true);
				let response = (
					await axios.get(
						`/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${input}&page=${pageNumber}&include_adult=false`
					)
				).data;
				if (response.results.length > 0) {
					setResults((prev) => [...prev, ...response.results]);
				} else {
					setShowMessage(true);
				}
				setIsLoading(false);
			};
			request();
		}
	}, [pageNumber]);

	const handleChange = (ev) => {
		setInput(ev.target.value);
	};

	const handleSubmit = async (ev) => {
		ev.preventDefault();
		if (input.length > 0) {
			setShowMessage(false);
			setShowResults(true);
			try {
				let response = (
					await axios.get(
						`/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&query=${input}&page=1&include_adult=false`
					)
				).data;
				setResults(response.results);
			} catch (error) {
				console.log(error);
			}
		}
	};

	return (
		<Layout>
			<StyledSearch>
				<form className='form' onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Buscar una pelicula...'
						value={input}
						onChange={handleChange}
					/>
					<GoSearch />
				</form>
				{showResults ? (
					<section>
						<div className='card-container'>
							{results.length > 0 ? (
								results.map((movie) => <MovieCard movie={movie} key={movie.id} />)
							) : (
								<p>No hay resultados</p>
							)}
						</div>
						{results.length > 0 && (
							<div className='load-more'>
								{!showMessage ? (
									<button
										className='load-more-btn'
										disabled={isLoading ? true : null}
										onClick={() => setPageNumber((n) => n + 1)}
									>
										{isLoading ? <ImSpinner2 /> : 'Load more movies'}
									</button>
								) : (
									<p className='message'>
										<BsExclamationTriangle />
										No more results
									</p>
								)}
							</div>
						)}
					</section>
				) : (
					<section>
						<h2>Buscar por género</h2>
						<button onClick={() => setIndexGenres((i) => i + 5)}>+</button>
						<button onClick={() => setIndexGenres((i) => i - 5)}>-</button>
						<div className='filter-container'>
							{genres
								.filter((g, i) => i >= indexGenres && i <= indexGenres + 4)
								.map((genre) => (
									<FilterButton name={genre.name} />
								))}
						</div>

						<h2>Buscar por actor</h2>
						<button onClick={() => setIndexActors((i) => i + 5)}>+</button>
						<button onClick={() => setIndexActors((i) => i - 5)}>-</button>
						<div className='filter-container'>
							{actors
								.filter((g, i) => i >= indexActors && i <= indexActors + 4)
								.map((actor) => (
									<FilterButton name={actor.name} />
								))}
						</div>
					</section>
				)}
			</StyledSearch>
		</Layout>
	);
};
// /discover/movie?api_key=9ca328af7c78baabe047a77c3ca0675e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16
// /person/popular?api_key=9ca328af7c78baabe047a77c3ca0675e&language=en-US&page=1
export default Search;
