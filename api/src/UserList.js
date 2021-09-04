import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';
import   './UserList.css';
const UserList = () =>{
   
    const [listOfUser, setlistOfUser] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setlistOfUser(response.data))
        .catch(error => console.log(error))
    }, [])

        return (
            <div className="listUsers">
                {listOfUser.map(user => (
                    <div key={user.id} className="card" >
                            <h4>Name : {user.name}</h4>
                            <h4>Email : {user.email}</h4>
                            <h4>Post : {user.company.name}</h4>
                    </div>
                ))}
            </div>
        )
    
    }
export default UserList
