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

	.no-movies {
		padding: 1em 1.5em 1em 0.5em;
		margin: auto;
		max-width: fit-content;
		width: 90%;
		background: var(--primary-light);
		color: var(--dark-100);
		border-radius: 0.5em;
		font-weight: 700;
		font-size: 1.2em;

		.flex {
			display: flex;
			align-items: center;
		}

		svg {
			min-width: 2em;
			font-size: 2.5em;
		}

		button {
			display: block;
			border: 0;
			background-color: var(--dark-100);
			margin: 1.5em auto 0;
			padding: 0.75em 1.2em;
			border-radius: 0.5em;
			color: var(--white);
			font-weight: 700;
			cursor: pointer;
			transition: background-color 200ms ease, transform 100ms linear, box-shadow 100ms linear;

			&:hover {
				transform: translateY(-2px);
				box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.5);
				background-color: var(--dark-300);
			}

			&:active {
				transform: scale(0.95);
			}
		}
	}

	@media (max-width: 700px) {
		.no-movies {
			padding: 1em 1.5em;
			.flex {
				flex-direction: column;
				justify-content: center;
				text-align: center;
			}
		}
	}
`;
