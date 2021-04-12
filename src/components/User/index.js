/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react"
import "./styles.css"
import AppUserContext from "../../utils/AppUserContext"

//To display the list of users in the directory
function UserDirectory() {
    const listOfUsers = useContext(AppUserContext)
    return (
        <div>
            {listOfUsers.map(users => 
                <div className="userRecord container">
                    <div className="row">
                        <div className="col">
                        <img className="userImage" src={users.photo.large}></img>
                        </div>
                        <div className="userName col">
                            <p>{users.name}</p> 
                        </div>
                        <div className="userInfo col">
                            <p>Email: {users.email}</p>
                            <p>Username: {users.username}</p>
                            <p>Phone: {users.phone}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserDirectory