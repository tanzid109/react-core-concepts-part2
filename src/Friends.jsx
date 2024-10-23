import { useEffect, useState } from "react"
import Friend from "./Friend"

export default function Friends(){
    const [friends,setFriends]= useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return(
        <div style={{border:'1px solid red',padding:'15px'}}>
            <h2>Friends : {friends.length}</h2>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}