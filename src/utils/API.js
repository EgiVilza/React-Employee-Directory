import axios from "axios"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getUsers: function() {
        return new Promise((resolve, reject) => {
            axios
                .get("https://randomuser.me/api/?results=20")
                .then(res => {
                    const users = res.data
                    const results = users.results.map(user => {
                        return {
                            name: user.name.first + " " + user.name.last,
                            firstname: user.name.first,
                            lastname: user.name.last,
                            gender: user.gender,
                            phone: user.phone,
                            email: user.email,
                            photo: user.picture,
                            username: user.login.username
                        }
                    })
                    resolve(results)
                })
            .catch(err => reject(err))
        })
    }
}