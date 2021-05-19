import styled from 'styled-components';
import { show } from '../../utils/animations';

export const StyledFiltersContainer = styled.section`
	.filter-container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		animation: ${show} 500ms;
		padding-bottom: 2em;
	}

	h2 {
		margin-left: 0.5em;
		margin-bottom: 1.25em;
		position: relative;

		&:after {
			content: '';
			display: block;
			width: 2em;
			height: 0.2em;
			background-color: var(--primary);
			position: absolute;
			left: 0;
			bottom: -0.75em;
		}
	}
`;
