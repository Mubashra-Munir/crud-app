import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">CRUD application</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                        </ul>
                        {/* <button type="button" className="btn btn-primary">Login</button> */}
                        {/* <button type="button" className="btn btn-secondary">SignUp</button> */}
                        <a href="/login" class="btn btn-primary button-nav">Login</a>
                        <a href="/signup" class="btn btn-success button-nav">SignUp</a>
                        <a href="/logout" class="btn btn-danger button-nav">Logout</a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar