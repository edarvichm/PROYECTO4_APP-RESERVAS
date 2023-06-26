// import React from 'react'

import { NavLink } from "react-router-dom"


export const NavBar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Offcanvas navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" href="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" href="#">Link</NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </NavLink>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" href="#">Action</NavLink></li>
              <li><NavLink className="dropdown-item" href="#">Another action</NavLink></li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li><NavLink className="dropdown-item" href="#">Something else here</NavLink></li>
            </ul>
          </li>
        </ul>
        <form className="d-flex mt-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
