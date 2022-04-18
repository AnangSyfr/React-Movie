import imgPlaceholder from '../img/img-placeholder.png';
const Movie = (props) => {

    const getImage = () => {
        if(props.movie.poster_path){
            return `https://image.tmdb.org/t/p/w342${props.movie.poster_path}`;
        } else {
            return imgPlaceholder
        }
    }

    const getTitle = () => {
        if(props.movie.title.lentgh >= 17){
            return props.movie.title.substring(0, 17) + "...";
        } else {
            return props.movie.title;
        }
    }

    const getYear = () => {
        return new Date(props.movie.release_date).getFullYear();
    }

    const getOverview = () => {
        if(props.movie.title.lentgh >= 200){
            return props.movie.title.substring(0, 200) + "...";
        } else {
            return props.movie.title;
        }
    }

    const getGenre = () => {
        const genres = [
               { "id": 28, "name": "Action" },
               { "id": 12, "name": "Adventure" },
               { "id": 16, "name": "Animation" },
               { "id": 35, "name": "Comedy" },
               { "id": 80, "name": "Crime" },
               { "id": 99, "name": "Documentary" },
               { "id": 18, "name": "Drama" },
               { "id": 10751, "name": "Family" },
               { "id": 14, "name": "Fantasy" },
               { "id": 36, "name": "History" },
               { "id": 27, "name": "Horror" },
               { "id": 10402, "name": "Music" },
               { "id": 9648, "name": "Mystery" },
               { "id": 10749, "name": "Romance" },
               { "id": 878, "name": "Science Fiction" },
               { "id": 10770, "name": "TV Movie" },
               { "id": 53, "name": "Thriller" },
               { "id": 10752, "name": "War" },
               { "id": 3, "name": "Western"}
        ];

        let movieGenre = [];
        genres.forEach((genre) => {
            if(props.movie.genre_ids.includes(genre.id)){
                movieGenre.push(genre.name)
            }
        });

        return (
            <div>
                {
                    movieGenre.map((genre) => 
                        <span key={genre.toString()} className="badge bg-success me-1">{genre}</span>
                    )
                }
            </div>
        )
    }

    return (
        <div className="movie-container col-6 col-md-4 col-xl-3 mb-5">
            <img src={getImage()} alt={props.movie.title} className="w-100 img-thumbnail"/>
            <span className="badge bg-danger vote">{props.movie.vote_average}</span>
            <div className='movie-info'>
                <h2>{getTitle()}</h2>
                <p>{getYear()}</p>
                <p className="overview d-none d-lg-block">
                    {getOverview()}
                </p>
                {getGenre()}
            </div>
        </div>
    )
}

export default Movie;