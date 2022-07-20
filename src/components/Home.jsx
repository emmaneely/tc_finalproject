import React, { useState, useEffect } from "react";
import { Movie } from "./Movie";

const API_KEY = "690b2109eabcf31cf15a6bf3629ea91c";
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;

export const Home = () => {
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);

    const getMovies = (API) => {
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
            setMovies(data.results);
        });
    }

    return (
        <div className="movie-container">
            {movies.length > 0 && movies.map(movie =>
            <Movie key={movie.id} {...movie} />)}
        </div>
    )
}
