import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <>
      <main className="main" id="top" />
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="data-navbar-on-scroll">
          <div className="container">
            <Link href="/">
              <a className="navbar-brand">
                <h1 style={{fontWeight: "bold", margin: 0}}>La Plaza</h1>
              </a>
            </Link>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto pt-2 pt-lg-0 font-base">
                <li className="nav-item px-2" data-anchor="data-anchor">
                  <Link href="/">
                    <a className="nav-link fw-medium active" aria-current="page">Home</a>
                  </Link>
                </li>
                <li className="nav-item px-2" data-anchor="data-anchor">
                  <Link href="#events">
                    <a className="nav-link">Events</a>
                  </Link>
                </li>
                <li className="nav-item px-2" data-anchor="data-anchor">
                  <Link href="#services">
                    <a className="nav-link">Our Services </a>
                  </Link>
                </li>
                <li className="nav-item px-2" data-anchor="data-anchor">
                  <Link href="#testimonial">
                    <a className="nav-link">Testimonial </a>
                  </Link>
                </li>
                <li className="nav-item px-2" data-anchor="data-anchor">
                  <Link href="#country">
                    <a className="nav-link">Country </a>
                  </Link>
                </li>
              </ul>
              <div className="ps-lg-5">
                <button className="btn btn-outline-primary order-0">Apply</button>
              </div>
            </div>
          </div>
        </nav>
      
  </>
  )
}

export default Navbar