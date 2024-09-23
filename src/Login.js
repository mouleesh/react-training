import React, {useEffect, useState} from "react";

const userCredentials ={
    user: "avinash",
    pass: "avinash@123"
}

export default function Login(){

    const [userObj, setUserObj] = useState({
        username: "",
        password: ""
    });

    // useEffect(()=>{
    //     console.log("I am being triggerd unwantedly");
    // });

    useEffect(()=>{
        console.log("Component has been mounted")

        //Make an API call upon Mounting.

        return () => {
            console.log("Component will unmount");
        }
    }, []);

    useEffect(()=>{
        console.log("Component has been updated")
    }, [userObj]);

    const handleChange = (event) => {
       setUserObj({
            ...userObj,
            [event.target.name]: event.target.value
       })
    }

    const handleSubmission = () => {
        if(userObj.username === userCredentials.user && userObj.password === userCredentials.pass){
            alert("Login Success.")
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