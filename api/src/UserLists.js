import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'


function UserLists() {
    const [listOfUsers,setListOfUsers]= useState([]);

  
    useEffect (() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setListOfUsers(response.data))
        .catch(error => console.log(error))
    }, [])
    return (
        <div className="listUsers">
        {listOfUsers.map(user => (
            <div key={user.id} className="card" >
                    <h4>Name : {user.name}</h4>
                    <h4>Email : {user.email}</h4>
                    <h4>Post : {user.company.name}</h4>
            </div>
        ))}
    </div>
    )
}

export default UserLists
