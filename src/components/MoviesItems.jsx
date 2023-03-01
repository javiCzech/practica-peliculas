
export const MoviesItem = ({url,title,description}) => {
    return (
    <div className="card">
    <img className="card-img" src={`https://image.tmdb.org/t/p/original${url}`} alt={title}/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-body">{description}</p>
    </div>
  </div>
    )
  }