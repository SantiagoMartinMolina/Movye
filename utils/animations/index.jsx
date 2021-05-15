import { keyframes } from 'styled-components';

export const show = keyframes`
	0% { opacity: 0 }
	100% { opacity: 1 }
`;

export const hide = keyframes`
	0% { opacity: 1 }
	100% { opacity: 0 }
`;

export const rotate = keyframes`
	0% { transform: rotateZ(0) }
	100% { transform: rotateZ(360deg) }
`;
