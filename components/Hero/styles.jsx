import styled from 'styled-components';

export const StyledHero = styled.div`
	background-image: url(${(props) => props.bgImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	height: 30em;
	display: flex;
	overflow: hidden;
	cursor: pointer;

	.info {
		padding: 0 4em 2em;
		display: flex;
		flex-direction: column;
		flex: 1;
		background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100%);
	}

	h1 {
		margin-top: auto;
		font-size: 2.5em;
	}

	.description {
		max-width: 80ch;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		word-break: break-word;
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

	@media (max-width: 550px) {
		.info {
			padding: 0 2em 2em;
		}
		h1 {
			font-size: 1.75em;
		}

		.data p {
			font-size: 1em;
		}
	}
`;
