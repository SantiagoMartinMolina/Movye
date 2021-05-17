import { StyledFilterButton } from './styles';

const FilterButton = ({ bg, name }) => {
	const randomColor = () => {
		const h = Math.floor(Math.random() * 360);
		return `hsl(${h}, 80%, 80%)`;
	};
	return (
		<StyledFilterButton bg={randomColor()}>
			<span>{name}</span>
		</StyledFilterButton>
	);
};

export default FilterButton;
