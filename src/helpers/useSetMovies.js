import  { useEffect, useState } from 'react'
import { GetMovies } from '../components/GetMovies';

export const useSetMovies = (category) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const newMovie = async() => {
        const newMovies = await GetMovies(category);
        setMovies(newMovies);
        setIsLoading(false);
    }
    useEffect(() => {
        newMovie();
    },[])
    
  return {
    movies,
    isLoading
  }
  
}
