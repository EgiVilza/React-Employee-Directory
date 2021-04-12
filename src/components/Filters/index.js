import React from "react"
import "./styles.css"

// Sort Radio Filter by firstname or lastname
function Filters(props) {
    return (
        <div className="container filter">
            <div className="row">
                <div className="col sort">
                    <form>
                        <p>Sort By: </p>
                        
                        <label htmlFor="firstname">Firstname:</label>
                        <input
                            type="radio"
                            name="name"
                            value="firstname"
                            id="firstname"
                            className="radioFilter"
                            onChange={props.handleSortChange}
                        ></input><br></br>

                        <label htmlFor="lastname">Lastname:</label>
                        <input
                            type="radio"
                            name="name"
                            value="lastname"
                            id="lastname"
                            className="radioFilter"
                            onChange={props.handleSortChange}
                        ></input><br></br>       
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Filters