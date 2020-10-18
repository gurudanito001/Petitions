import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}}>
            <div className="container">
                <Link to="/" className="navbar-brand text-white">chng.org</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/new-petition" className="nav-link text-white" href="#">Start a Petition</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-white" href="#">My Petitions</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Browse</a>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input className="form-control form-control-sm mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

const styles = {
    backgroundColor: "rgba(0, 0, 0, 0.9)"
}

export default Navbar; 