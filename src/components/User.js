import { useState, useEffect } from "react";

const User = () => {
    const [count, setCount] = useState(0);
    const [count2] = useState(1);

    useEffect(()=>{
        console.log("useEffect from user.js")
    },[])
    return (
        <div className="user-card">
            <h1>COUNT: {count}</h1>
            <h1>COUNT2: {count2}</h1>
            <h2>Name: Sasuke (function)</h2>
            <h2>Location: hidden Leaf</h2>
            <h2>Contact: Sasuke</h2>
             <button onClick={()=>{
                setCount(count+1)
            }}>increment</button>
        </div>
    )
}

export default User;