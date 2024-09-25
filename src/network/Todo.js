import axios from "axios";
import { useEffect, useState } from "react"

export default function Todo(){

    const [todos, setTodos] = useState([]);

    const getTodos = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos/");
        // .then((res) => {
        //     setTodos(res.data)
        // })
        setTodos(response.data);
    }

    useEffect(()=> {
        getTodos();
    }, [])

    const handleButtonClick = () => {
        axios.post("https://jsonplaceholder.typicode.com/posts/", {name: "Prabu", age: 14})
        .then((res) => {
            if(res.status === 201){
                console.log(res.data);
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }

    return <>
        <button onClick={handleButtonClick}>HIT Backend</button>
        {todos.map((tod) => <p key={tod.id}>{tod.title}</p>)}
    </>
}