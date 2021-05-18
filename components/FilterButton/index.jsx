import { memo } from 'react';
import { StyledFilterButton } from './styles';

const FilterButton = memo(({ bg, name, searchBy, query, id }) => {

	const randomColor = () => {
		const h = Math.floor(Math.random() * 360);
		return `hsl(${h}, 80%, 80%)`;
	};

	return (
		<StyledFilterButton bg={randomColor()} onClick={() => searchBy(query, id)}>
			<span>{name}</span>
		</StyledFilterButton>
	);
});

export default FilterButton;
