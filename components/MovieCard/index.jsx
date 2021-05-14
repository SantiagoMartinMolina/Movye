import { StyledMovieCard } from "./styles";


const MovieCard = () => {
    return (
        <StyledMovieCard>
            <div className='info'>
                <h2>Titulo</h2>
                <div className='data'>
                    <p>1996</p>
                    <p>7.5</p>
                </div>
                <button className='btn'>Ver mas</button>
            </div>
        </StyledMovieCard>
    )
}

export default MovieCard;