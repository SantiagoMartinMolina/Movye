import { useEffect, useState } from 'react';
import axios from '../axios';
import Layout from '../components/Layout';
import Catalog from '../components/Catalog/index';
import Modal from '../components/Modal';

export default function Home() {
	const [movieList, setMovieList] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(`/list_movies.json?page=${pageNumber}&sort_by=year`)
			.then(({ data }) => {
				setMovieList((movies) => [...movies, ...data.data.movies]);
				setIsLoading(false);
			})
			.catch((err) => {
				setIsLoading(false);
				console.error(err);
			});
	}, [pageNumber]);

	return (
		<Layout>
			<Modal />
			<Catalog movieList={movieList} isLoading={isLoading} changePage={setPageNumber} />
		</Layout>
	);
}
