import styled from 'styled-components';
import { rotate } from '../../utils/animations';

export const StyledSpinner = styled.div`
    width: 5em;
    height: 5em;
    border: 5px solid var(--dark-300);
    border-right-color: var(--primary);
    border-radius: 50%;
    animation: ${rotate} 1.2s linear infinite;
`