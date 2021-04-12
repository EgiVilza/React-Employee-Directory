import React, { useEffect, useState } from 'react'
import API from "../utils/API"
import AppUserContext from '../utils/AppUserContext'
//import UserDirectory from "../components/User"
import UserList from "../components/UserList"
import Search from "../components/Search"
import Filters from "../components/Filters"

function Users() {

    //To display users on the front end
    const [displayUsers, setDisplayUsers] = useState([])

    //To save the initial list of users
    const [users, setUsers] = useState([])

    // When the component mounts, a call will be made to get random users
    useEffect(() => {
        loadUsers()
    }, [])

    //Function to store api results in the users and displayUsers useState
    function loadUsers() {
        API.getUsers()
        .then(results => {
            setUsers(results)
            setDisplayUsers(results)
        })
        .catch(err => console.log(err))
    }

    //Function to search users by name
    function searchUsersByName(searchInput) {
        let array = []
        // eslint-disable-next-line array-callback-return
        users.map(user => {
            const name = user.name.toUpperCase()
            if (name.startsWith(searchInput)) {
                array.push(user)
            } 
        })
        setDisplayUsers(array)
    }

    //Function to sort users by first or last name
    function sortUsers(filterBy) {
        const originalArray = displayUsers
        let newArray = []

        //Sort by firstname or lastname
        if (filterBy === "firstname") {
            const byFirstname = originalArray.sort(function(a, b) {
                var textA = a.firstname.toUpperCase();
                var textB = b.firstname.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            byFirstname.forEach(element => {
                newArray.push(element)
            });
            setDisplayUsers(newArray)
        }
        else if (filterBy === "lastname") {
            const byLastname = originalArray.sort(function(a, b) {
                var textA = a.lastname.toUpperCase();
                var textB = b.lastname.toUpperCase();
                return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
            });
            byLastname.forEach(element => {
                newArray.push(element)
            });
            setDisplayUsers(newArray)
        }
        
    }

    //Stores value from the search text input and calls the searchUsersByName function
    const handleInputChange = event => { 
        let searchInput = event.target.value.toUpperCase()
        searchUsersByName(searchInput)
    }

    //Stores value from the radio button filter and calls the sortUsers function
    const handleSortChange = event => {
        const filterBy = event.target.value
        sortUsers(filterBy)
    }

    return (
        <AppUserContext.Provider value={displayUsers}>
            <div>
                <Search 
                    handleInputChange={handleInputChange}
                />
                <Filters 
                    handleSortChange={handleSortChange}
                />
                <UserList />
            </div>
        </AppUserContext.Provider> 
    )
    
}

export default Users

