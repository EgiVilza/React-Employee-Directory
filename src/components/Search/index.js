import React from "react"
import "./styles.css"

//Search user input
function Search(props) {
    return (
        <div className="container form">
        <div className="row">
                <form className="">
                    <p className="searchText"> Search By Name</p>
                    <input 
                        className="searchBox" 
                        type="text" 
                        onChange={props.handleInputChange}
                    >
                    </input>
                </form>
            </div>
        </div>
    )
}

export default Search