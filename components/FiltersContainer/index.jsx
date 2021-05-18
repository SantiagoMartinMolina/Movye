import { useMemo } from 'react';
import FilterButton from '../FilterButton';
import { StyledFiltersContainer } from './styles';

const FiltersContainer = ({ genres, searchBy }) => {
	return (
		<StyledFiltersContainer>
			<h2>Search by genre</h2>
			<div className='filter-container'>
				{genres.map((genre, i) => (
					<FilterButton
						key={genre.id}
						name={genre.name}
						id={genre.id}
						className={`btn-${i}`}
						searchBy={searchBy}
						query='with_genres'
					/>
				))}
			</div>
		</StyledFiltersContainer>
	);
};

export default FiltersContainer;
