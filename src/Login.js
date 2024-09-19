import React, {useState} from "react";

const userCredentials ={
    user: "avinash",
    pass: "avinash@123"
}

export default function Login(){

    const [userObj, setUserObj] = useState({
        username: "",
        password: ""
    });

    const handleChange = (event) => {
       setUserObj({
            ...userObj,
            [event.target.name]: event.target.value
       })
    }

    const handleSubmission = () => {
        if(userObj.username === userCredentials.user && userObj.password === userCredentials.pass){
            alert("Successfully Logged In.");
        } else {
            alert("Oops! Authentication Failed.")
        }
    }

    return <>
        <label>Username: <input name="username" value={userObj.username} type="text" onChange={handleChange}/> </label>
        <br/>
        <label>Password: <input name="password" value={userObj.password} type="password" onChange={handleChange}/> </label>
        <br/>
        <button onClick={handleSubmission}>Login</button>
        <p>{userObj.username}</p>
    </>
}