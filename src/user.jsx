import { useEffect, useState } from "react"
import UserName from "./usersName";

export default function User(){

    const [user, setUser]=useState([]);
    useEffect(()=>{

        // use async await function 
        const loadData = async()=>{
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUser(data);
            // console.log(data);
        }
        loadData();

        // use normal fetch 
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(res => res.json())
        // .then(data => console.log(data));
    },[])

    return(
        <div className="box">
            <h2>this is userEffct : </h2>
            {
                user.map(friend => <UserName names= {friend}></UserName>)
            }
        </div>
    )
}