
import MovieCard from '../MovieCard';
import Slider from '../Slider';
import { StyledCatalog } from './styles';

const Catalog = () => {
    return (
        <StyledCatalog>
            <Slider bgImage={'https://images.unsplash.com/photo-1517299321609-52687d1bc55a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'} />
            <div className='container'>
                <MovieCard />
                <MovieCard />

                <MovieCard />

                <MovieCard />

                <MovieCard />

                <MovieCard />

                <MovieCard />
                <MovieCard />

                <MovieCard />

                <MovieCard />

                <MovieCard />

                <MovieCard />

                <MovieCard />

                <MovieCard />



            </div>
        </StyledCatalog>
    )
}

export default Catalog;