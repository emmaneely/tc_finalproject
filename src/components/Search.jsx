import React, { useState } from "react";
import { SearchResults } from "./SearchResults";

const API_KEY = "690b2109eabcf31cf15a6bf3629ea91c";

export const Search = () => {
  const [ results, setResults ] = useState([]);
  const [ searchTerm, setSearchTerm ] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();

    setSearchTerm(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&language=en-US&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if(!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
      }
    });
  };

  return (
    <div className="search-page">
      <div className="container">
        <div className="search-content">
          <div className="input-wrapper">
            <input
              className="search-bar"
              type="search"
              placeholder="Search for a movie..."
              value={searchTerm}
              onChange={handleOnChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
                {results.map((movie) => (
                  <li key={movie.id}>
                    <SearchResults movie={movie} />
                  </li>
                ))}
            </ul>
          )}

        </div>
      </div>
    </div>
  )
}