import styled from 'styled-components';

export const StyledMovieCard = styled.div`
	min-width: 15em;
	max-width: 30em;
	height: 20em;
	flex: 1;
	display: flex;
	overflow: hidden;
	position: relative;

	.img-container {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: calc(100% + 0.5em);
		transition: transform 300ms ease;

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: top;
		}
	}

	.info {
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%);
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		transform: translateY(8em);
		transition: transform 300ms ease;
		padding: 1em;
	}

	h2 {
		margin-bottom: 0.5em;
		font-size: 1.8em;
		transform: translateY(0.5em);
		text-align: center;
		text-shadow: 0 0 0.3em rgba(0, 0, 0, 0.4);
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		word-break: break-word;
	}

	.data {
		display: flex;
		margin-bottom: 1em;

		svg {
			margin-right: 0.5em;
		}

		p {
			display: flex;
			align-items: center;
		}

		p:last-child {
			margin-left: 1em;

			svg {
				color: gold;
			}
		}
	}

	button {
		all: unset;
		color: var(--dark-100);
		background-color: var(--primary);
		padding: 1em 1.5em;
		font-size: 0.7em;
		text-transform: uppercase;
		font-weight: 700;
		border-radius: 0.75em;
		user-select: none;
		pointer-events: none;
		cursor: pointer;
		opacity: 0;
		transition: opacity 300ms ease, background-color 300ms ease;

		&:hover {
			background-color: var(--primary-light);
		}

		&:active {
			transform: scale(0.95);
		}
	}

	&:hover {
		.img-container {
			transform: translateY(-0.5em);
		}
		.info,
		h2 {
			transform: translateY(0);
			-webkit-line-clamp: unset;
		}

		button {
			opacity: 1;
			pointer-events: all;
		}
	}
`;
