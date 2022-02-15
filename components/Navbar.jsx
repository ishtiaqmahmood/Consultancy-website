import React from 'react'

function Navbar() {
  return (
    <>
      <main className="main" id="top" />
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="data-navbar-on-scroll">
          <div className="container">
            <h1 style={{fontWeight: "bold"}}>La Plaza</h1>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto pt-2 pt-lg-0 font-base">
                <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link fw-medium active" aria-current="page" href="index.html">Home</a></li>
                <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link" href="#events">Events</a></li>
                <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link" href="#services">Our Services </a></li>
                <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link" href="#testimonial">Testimonial </a></li>
                <li className="nav-item px-2" data-anchor="data-anchor"><a className="nav-link" href="#country">Country </a></li>
              </ul>
              <form className="ps-lg-5">
                <button className="btn btn-outline-primary order-0" type="submit">Apply</button>
              </form>
            </div>
          </div>
        </nav>
      
  </>
  )
}

export default Navbar