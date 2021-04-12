/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import "./styles.css"

//NavBar
function Navbar() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid" id="navbar">
                <a className="navbar-brand" id="text" href="#">Employee Directory</a>
                </div>
            </nav>
        </div>
    )
}

export default Navbar