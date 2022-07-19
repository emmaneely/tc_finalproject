const IMG_API = "https://image.tmdb.org/t/p/w1280";
const default_image = "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

const setRatingClass = (rating) => {
    if(rating >= 7.5) {
        return "green"
    } else if(rating >= 5) {
        return "yellow"
    } else {
        return "red";
    }
};

const Movie = ({ title, poster_path, overview, vote_average }) => (
    <div className="movie">
        <img 
            src={poster_path ? (IMG_API + poster_path) : default_image}
            alt={title}
        />
        <div className="movie-info">
            <h3>{title}</h3>
            <span className={
                `rating ${setRatingClass(vote_average)}`
                }>
                {vote_average}
            </span>
        </div>
        <div className="movie-synopsis">
            <h2>Synopsis:</h2>
            <hr />
            <p>{overview}</p>
        </div>
    </div>
);

export default Movie;