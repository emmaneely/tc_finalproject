import React from "react";
import { MovieControls } from "./MovieControls";

const IMG_API = "https://image.tmdb.org/t/p/w200";
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

export const WatchCard = ({ movie, type }) => {
    return (
        <div className="movie">
            <div className="overlay"></div>
            <img
                src={movie.poster_path ? (`${IMG_API}${movie.poster_path}`) : default_image}
                alt={`${movie.title} Poster`}
            />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <span className={
                    `rating ${setRatingClass(movie.vote_average)}`
                    }>
                    {movie.vote_average}
                </span>
            </div>
            <MovieControls type={type} movie={movie} />
        </div>
    );
};
/* STOP UNDOING HERE */