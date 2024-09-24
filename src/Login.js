import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updatePassword, updateUsername } from "./redux/userSlice";
import Dashboard from "./Dashboard";

const userCredentials = [{
        user: "avinash",
        pass: "123"
    },{
        user: "ramesh",
        pass: "123"
    }
]

export default function Login(){

    const [userObj, setUserObj] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
        if(event.target.name === "username"){
            dispatch(updateUsername(event.target.value))
        } else {
            dispatch(updatePassword(event.target.value))
        }

        setUserObj({
                ...userObj,
                [event.target.name]: event.target.value
        })
    }

    const handleSubmission = () => {
        const foundUser = userCredentials.find(userCred => {
            return userCred.user === userObj.username
        })

        if(foundUser && foundUser.pass === userObj.password){
            alert("Login Success.")
            navigate('/dashboard')
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