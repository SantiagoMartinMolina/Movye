import styled from 'styled-components';
import { rotate } from '../../utils/animations';

export const StyledCatalog = styled.main`
	padding-bottom: 2em;
	.container {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
	}

	.load-more {
		margin-top: 2em;
		display: flex;
		justify-content: center;
	}

	.load-more-btn {
		width: 15em;
		height: 3em;
		background-color: var(--secondary);
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 1em 0;
		border: none;
		font-size: 0.75em;
		color: var(--white);
		font-weight: 700;
		text-transform: uppercase;
		border-radius: 0.6em;
		cursor: pointer;
		transition: background-color 200ms ease;

		svg {
			animation: ${rotate} 2s infinite linear;
		}

		&:hover {
			background-color: var(--secondary-light);
		}

		&:active {
			transform: scale(0.95);
		}

		&[disabled] {
			pointer-events: none;
		}
	}
`;
