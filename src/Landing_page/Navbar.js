import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
            <nav class="navbar navbar-expand-lg bg-body-tertiary  border-bottom sticky-top">
                <div class="container p-2">
                    <a class="navbar-brand pl-5" href="/"><img src='./images/logo.svg' alt='logo' style={{width:"20%",backgroundColor: "#ffffff"}}></img></a>
                    <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" aria-current="page" to="/signup">Signup</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/products">Products</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/pricing">Pricing</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/support">Support</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
    );
}

export default Navbar;