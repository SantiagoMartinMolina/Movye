import styled from 'styled-components';
import { showAndMove } from '../../utils/animations';

export const StyledShowMovies = styled.section`
    padding: 2em 0;

    .card-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .load-more {
		margin-top: 2em;
		display: flex;
		justify-content: center;
	}

	.message {
		display: flex;
		align-items: center;
		background-color: var(--dark-100);
		padding: 1em 2em;
		border-radius: 0.5em;
		font-size: 0.75em;
		color: var(--white);
		text-transform: uppercase;
		animation: ${showAndMove} 500ms;

		svg {
			font-size: 2em;
			margin-right: 0.5em;
			color: var(--secondary);
		}
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

		&:hover {
			background-color: var(--secondary-light);
		}

		&:active {
			transform: scale(0.95);
		}

	}

`