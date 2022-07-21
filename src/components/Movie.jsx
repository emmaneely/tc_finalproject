import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

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

export const Movie = ({ movie }) => {

    const { addMovieToWatchlist, addMovieToWatched, watchlist, watched } = useContext(GlobalContext);

    let storedMovie = watchlist.find((watchlistMovie) => watchlistMovie.id === movie.id);
    let storedMovieWatched = watched.find((watchedMovie) => watchedMovie.id === movie.id);

    const watchlistDisabled = storedMovie
        ? true
        : storedMovieWatched
        ? true
        : false;

    const watchedDisabled = storedMovieWatched
        ? true
        : false;

    return (
    <div className="movie">
        <img
            src={movie?.poster_path ? (`${IMG_API}${movie?.poster_path}`) : default_image}
            alt={`${movie?.title} Poster`}
        />
        <div className="movie-info">
            <h4>{movie?.title}</h4>
            <span className={
                `rating ${setRatingClass(movie?.vote_average)}`
                }>
                {movie?.vote_average}
            </span>
        </div>
        <div className="btn-controls">
            <button
                className="btn"
                disabled={watchlistDisabled}
                onClick={() => addMovieToWatchlist(movie)}
                >
                    + Watchlist
            </button>
            <button
                className="btn"
                disabled={watchedDisabled}
                onClick={() => addMovieToWatched(movie)}
                >
                    + Watched
            </button>
        </div>
    </div>
)};
