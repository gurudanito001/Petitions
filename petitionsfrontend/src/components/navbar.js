import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function Navbar() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a class="navbar-brand h2" href="#">chng.org</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                    </ul>
                    <span class="navbar-text">
                        Navbar text with an inline element
                </span>
                </div>
            </div>
            
        </nav>
    )
}

export default Navbar; 