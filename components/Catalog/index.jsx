import Hero from '../Hero';
import MovieContainer from '../MoviesContainer';
import Select from 'react-select'
import { Context } from '../../context';
import { useContext, useEffect, useState } from 'react';
import axios from '../../axios';



const Catalog = ({ movieList, isLoading, changePage, showMessage, moviesLoaded }) => {

	const { genres } = useContext(Context)
	const [activeFilters, setActiveFilters] = useState(false);
	const [isLoadingFiltered, setIsLoadingFiltered] = useState(false);
	const [moviesLoadedFiltered, setMoviesLoadedFiltered] = useState(false)
	const [showMessageFiltered, setShowMessageFiltered] = useState(false);
	const [genresSelect, setGenresSelect] = useState('');
	const [year, setYear] = useState('');
	const [filteredMovies, setFilteredMovies] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);

	const genresOptions = genres.map(genre => ({ value: genre.id, label: genre.name }));
	const yearOptions = [];

	for (let i = 2021; i >= 1900; i--) {
		yearOptions.push({ value: i, label: i });
	}

	const handleGenres = (e) => {
		if (e.length === 0) {
			setGenresSelect('');
			if (!year) {
				setFilteredMovies([]);
				setActiveFilters(false);
			}
		}
		else {
			let genresString = e[0].value;
			for (let i = 1; i < e.length; i++) {
				genresString = genresString + `, ${e[i].value}`;
			}
			setGenresSelect(genresString);
			setPageNumber(1);
		}
	}

	const handleYears = (e) => {
		console.log(e);
		if (!e) {
			setYear('');
			if (!genresSelect) {
				setFilteredMovies([]);
				setActiveFilters(false);
			}
		}
		else {
			setYear(e.label);
			setPageNumber(1);
		}
	}

	useEffect(() => {
		if (genresSelect || year) {
			setMoviesLoadedFiltered(false);
			axios
				.get(
					`/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&include_adult=false&page=${pageNumber}&with_genres=${genresSelect}&primary_release_year=${year}`
				)
				.then(({ data }) => {
					setActiveFilters(true);
					setMoviesLoadedFiltered(true);
					setFilteredMovies(data.results);
				})
				.catch((err) => {
					setMoviesLoadedFiltered(true);
					console.error(err)
				});
		}
	}, [genresSelect, year])

	useEffect(() => {
		if (pageNumber > 1) {
			setIsLoadingFiltered(true);
			axios
				.get(
					`/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&include_adult=false&page=${pageNumber}&with_genres=${genresSelect}&primary_release_year=${year}`
				)
				.then(({ data }) => {
					if (data.results.length > 0) {
						setIsLoadingFiltered(false);
						setFilteredMovies((movies) => [...movies, ...data.results]);
					} else {
						setShowMessageFiltered(true);
					}
					setActiveFilters(true);
				})
				.catch((err) => {
					setIsLoadingFiltered(false);
					console.error(err);
				})
		}
	}, [pageNumber])

	return (
		<main>
			<Hero />
			<div>
				<div className='filter'>
					<Select
						options={genresOptions}
						isMulti
						onChange={handleGenres}
					/>
					<Select
						isClearable={true}
						options={yearOptions}
						onChange={handleYears}
					/>
					<Select
						isClearable={true}
						options={yearOptions}
						onChange={handleYears}
					/>
				</div>
			</div>
			{
				activeFilters
					?
					<MovieContainer
						movies={filteredMovies}
						showMessage={showMessageFiltered}
						isLoading={isLoadingFiltered}
						setPageNumber={setPageNumber}
						moviesLoaded={moviesLoadedFiltered}
					/>
					:

					<MovieContainer
						movies={movieList}
						showMessage={showMessage}
						isLoading={isLoading}
						setPageNumber={changePage}
						moviesLoaded={moviesLoaded}
					/>

			}
		</main>
	);
};

export default Catalog;
