import styled from 'styled-components';

export const StyledTopbar = styled.div`
    padding: 1.5em 4em; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--primary);
    .user{
        display: flex;
        align-items: center;
        div{
            margin-right: 0.5em;
            width: 3em;
            height: 3em;
            overflow: hidden;
            border-radius: 50%;
            border: 2px solid var(--primary);
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
    }
`