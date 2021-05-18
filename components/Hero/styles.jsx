import styled from 'styled-components';

export const StyledHero = styled.div`
	background-image: url(${(props) => props.bgImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 30em;
	display: flex;
	overflow: hidden;

	.info {
		padding: 0 4em 2em;
		display: flex;
		flex-direction: column;
		flex: 1;
		transform: translateY(5em);
		transition: transform 200ms ease;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
	}

	h1 {
		margin-top: auto;
		font-size: 2.5em;
	}

	.description {
		max-width: 80ch;
		opacity: 0;
		transition: opacity 400ms ease;
	}

	.data {
		display: flex;
		margin: 0.5em 0;
		p {
			display: flex;
			align-items: center;
			font-size: 1.3em;
		}
		svg {
			margin-right: 0.5em;
		}
		p:last-child {
			margin-left: 1em;
			svg {
				color: gold;
			}
		}
	}

	&:hover {
		.description {
			opacity: 1;
		}

		.info {
			transform: translateY(0);
		}
	}
`;
