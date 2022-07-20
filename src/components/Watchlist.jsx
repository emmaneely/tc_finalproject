import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { WatchCard } from "./WatchCard";

export const Watchlist = () => {
    const {watchlist} = useContext(GlobalContext);
    
    return (
        <div>
            <div>
                <h1>My Watchlist</h1>
            </div>

            {watchlist.length > 0 ? (
                <div>
                    {watchlist.map((movie) => (
                        <WatchCard 
                            key={movie.id}
                            movie={movie}
                            type="watchlist"
                        />
                    ))}
                </div>
            ) : (
                <h2 className="no-movies">There are no movies in your list, go add some!</h2>
            )}
            
        </div>
    );
};
