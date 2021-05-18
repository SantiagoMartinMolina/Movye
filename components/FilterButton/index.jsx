import { StyledFilterButton } from './styles';

const FilterButton = ({ className, name, searchBy, query, id }) => {
	return (
		<StyledFilterButton className={className} onClick={() => searchBy(query, id)}>
			<span>{name}</span>
		</StyledFilterButton>
	);
};

export default FilterButton;
