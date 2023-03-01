
import { useSetMovies } from '../helpers/useSetMovies'
import { MoviesItem } from './MoviesItems';

export const MoviesGrid = ({category}) => {
    const {isLoading, movies} = useSetMovies(category);
  return <>
    <h3>{ category }</h3>
    {
        isLoading && <h4>Cargando...</h4>
    }
    <div className="card-grid">
    {movies.map( peliculas => 
        (<MoviesItem key={peliculas.id}
        {...peliculas}/>)
    )}
    </div>
  </>
}

