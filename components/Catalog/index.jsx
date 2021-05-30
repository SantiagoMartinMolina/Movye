import Hero from '../Hero';
import MovieContainer from '../MoviesContainer';
import Select from 'react-select';
import { Context } from '../../context';
import { useContext, useEffect, useState } from 'react';
import axios from '../../axios';

const Catalog = ({ movieList, isLoading, changePage, showMessage, moviesLoaded }) => {
	const { genres } = useContext(Context);
	const [activeFilters, setActiveFilters] = useState(false);
	const [isLoadingFiltered, setIsLoadingFiltered] = useState(false);
	const [moviesLoadedFiltered, setMoviesLoadedFiltered] = useState(false);
	const [showMessageFiltered, setShowMessageFiltered] = useState(false);
	const [genresSelect, setGenresSelect] = useState('');
	const [year, setYear] = useState('');
	const [filteredMovies, setFilteredMovies] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [sorting, setSorting] = useState('');

	const genresOptions = genres.map((genre) => ({ value: genre.id, label: genre.name }));
	const yearOptions = [];
	const orderOptions = [
		{ value: 'popularity.asc', label: 'Less popular' },
		{ value: 'popularity.desc', label: 'More Popular' },
		{ value: 'primary_release_date.asc', label: 'Less recent' },
		{ value: 'primary_release_date.desc', label: 'Most recent' },
		{ value: 'vote_average.asc', label: 'Worst rated' },
		{ value: 'vote_average.desc', label: 'Best rated' },
	];

	for (let i = 2021; i >= 1900; i--) {
		yearOptions.push({ value: i, label: i });
	}

	const handleGenres = (e) => {
		if (e.length === 0) {
			setGenresSelect('');
			if (!year && !sorting) {
				setFilteredMovies([]);
				setActiveFilters(false);
			}
		} else {
			let genresString = e[0].value;
			for (let i = 1; i < e.length; i++) {
				genresString = genresString + `, ${e[i].value}`;
			}
			setGenresSelect(genresString);
			setPageNumber(1);
		}
	};

	const handleYears = (e) => {
		if (!e) {
			setYear('');
			if (!genresSelect && !sorting) {
				setFilteredMovies([]);
				setActiveFilters(false);
			}
		} else {
			setYear(e.label);
			setPageNumber(1);
		}
	};

	const handleSort = (e) => {
		if (!e) {
			setSorting('');
			if (!genresSelect && !year) {
				setFilteredMovies([]);
				setActiveFilters(false);
			}
		} else {
			setSorting(e.value);
			setPageNumber(1);
		}
	};

	useEffect(() => {
		if (genresSelect || year || sorting) {
			setMoviesLoadedFiltered(false);
			axios
				.get(
					`/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=${sorting}&include_adult=false&page=${pageNumber}&with_genres=${genresSelect}&primary_release_year=${year}`
				)
				.then(({ data }) => {
					setActiveFilters(true);
					setMoviesLoadedFiltered(true);
					setFilteredMovies(data.results);
				})
				.catch((err) => {
					setMoviesLoadedFiltered(true);
					console.error(err);
				});
		}
	}, [genresSelect, year, sorting]);

	useEffect(() => {
		if (pageNumber > 1) {
			setIsLoadingFiltered(true);
			axios
				.get(
					`/discover/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&sort_by=${sorting}&include_adult=false&page=${pageNumber}&with_genres=${genresSelect}&primary_release_year=${year}`
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
				});
		}
	}, [pageNumber]);

	const customStyles = {
		option: (provided, state) => ({
			...provided,
			color: 'var(--dark-100)',
			backgroundColor: state.isSelected && 'var(--primary)',
		}),
		multiValueRemove: (provided) => ({
			...provided,
			color: 'var(--dark-100)',
		}),
		control: (provided, state) => ({
			...provided,
			border: '0 !important',
			boxShadow: state.isFocused ? '0 0 0 2px var(--primary)' : '0 !important',
			'&:hover': {
				border: '0 !important',
			},
		}),
	};

	return (
		<main>
			<Hero />
			<div>
				<div className='filter'>
					<Select
						options={genresOptions}
						isMulti
						onChange={handleGenres}
						styles={customStyles}
						className='select'
						placeholder='Filter by genre(s)'
						instanceId={'react-01'}
						inputId={'react-01'}
					/>
					<Select
						isClearable={true}
						options={yearOptions}
						onChange={handleYears}
						styles={customStyles}
						className='select'
						placeholder='Filter by year'
						instanceId={'react-02'}
						inputId={'react-02'}
					/>
					<Select
						isClearable={true}
						options={orderOptions}
						onChange={handleSort}
						styles={customStyles}
						className='select'
						placeholder='Order by...'
						instanceId={'react-03'}
						inputId={'react-03'}
					/>
				</div>
			</div>
			{activeFilters ? (
				<MovieContainer
					movies={filteredMovies}
					showMessage={showMessageFiltered}
					isLoading={isLoadingFiltered}
					setPageNumber={setPageNumber}
					moviesLoaded={moviesLoadedFiltered}
				/>
			) : (
				<MovieContainer
					movies={movieList}
					showMessage={showMessage}
					isLoading={isLoading}
					setPageNumber={changePage}
					moviesLoaded={moviesLoaded}
				/>
			)}
		</main>
	);
};

export default Catalog;
