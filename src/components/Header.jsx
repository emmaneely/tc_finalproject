import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="inner-content">
                <ul className="nav-links">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/watchlist">Watchlist</Link>
                    </li>
                    <li>
                        <Link to="/watched">Watched</Link>
                    </li>
                    <li>
                        <Link to="/search">Search</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
  )
}
