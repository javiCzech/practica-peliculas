

export const GetMovies = async(category) => {
    const URL = `https://api.themoviedb.org/3/search/multi?api_key=f5773e1237f778ecf6dcf7bdb9e5c860&language=en-US&page=1&include_adult=false&query=${encodeURI(category)}`
    const resp = await fetch(URL);
    const {results} = await resp.json();
    console.log(results)
    const pelis = results.map(mov => {
        return{
        id: mov.id,
        title: mov.title,
        url: mov.poster_path,
        description: mov.overview
        }
    })
    return pelis;
}
   