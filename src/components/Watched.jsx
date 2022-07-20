import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { WatchCard } from "./WatchCard";

export const Watched = () => {
    const {watched} = useContext(GlobalContext);

    return (
        <div>
            <div>
                <h1>Watched Movies</h1>
            </div>

            {watched.length > 0 ? (
                <div>
                    {watched.map((movie) => (
                        <WatchCard 
                            key={movie.id}
                            movie={movie}
                            type="watched"
                        />
                    ))}
                </div>
            ) : (
                <h2 className="no-movies">There are no movies here, go watch some!</h2>
            )} 
        </div>
    )
}
