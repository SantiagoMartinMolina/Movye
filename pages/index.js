import { useEffect, useState, useContext } from 'react';
import axios from '../axios';
import Layout from '../components/Layout';
import Catalog from '../components/Catalog/index';
import { Context } from '../context';

export default function Home() {
	const [movieList, setMovieList] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const [showMessage, setShowMessage] = useState(false);
	const { setGenres } = useContext(Context);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(
				`/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&page=${pageNumber}`
			)
			.then(({ data }) => {
				if (data.results.length > 0) {
					setMovieList((movies) => [...movies, ...data.results]);
				} else {
					setShowMessage(true);
				}
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				console.error(err);
			});
	}, [pageNumber]);

	useEffect(() => {
		axios
			.get(`/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`)
			.then(({ data }) => {
				setGenres(data.genres);
			});
	}, []);

	return (
		<Layout>
			<Catalog
				movieList={movieList}
				isLoading={isLoading}
				changePage={setPageNumber}
				showMessage={showMessage}
			/>
		</Layout>
	);
}
