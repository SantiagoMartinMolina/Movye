import { StyledFilterButton } from './styles';

const FilterButton = ({ className, name, searchBy, genreId }) => {
	return (
		<StyledFilterButton className={className} onClick={() => searchBy(genreId)}>
			<span>{name}</span>
		</StyledFilterButton>
	);
};

export default FilterButton;
