import { useEffect, useState, useContext } from 'react';
import axios from '../../axios';
import Layout from '../../components/Layout';
import { Context } from '../../context';
import Form from '../../components/Form';
import MovieContainer from '../../components/MoviesContainer';
import FiltersContainer from '../../components/FiltersContainer';

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
				`/person/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`
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

	const reset = () => {
		setInput('');
		setShowResults(false);
	};

	const searchBy = (value) => {
		axios
			.get(
				`/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=1&with_genre=${value}`
			)
			.then(({ data }) => {
				console.log(data);
				setResults(data.results);
				setShowResults(true);
			});
	};

	return (
		<Layout>
			<main>
				<Form
					input={input}
					reset={reset}
					handleSubmit={handleSubmit}
					handleChange={handleChange}
				/>
				{showResults ? (
					<MovieContainer
						movies={results}
						showMessage={showMessage}
						isLoading={isLoading}
						setPageNumber={setPageNumber}
					/>
				) : (
					<FiltersContainer genres={genres} searchBy={searchBy} />
				)}
			</main>
		</Layout>
	);
};
// /discover/movie?api_key=9ca328af7c78baabe047a77c3ca0675e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=16
// /person/popular?api_key=9ca328af7c78baabe047a77c3ca0675e&language=en-US&page=1
export default Search;
