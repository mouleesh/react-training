import axios from "axios";
import { useEffect, useMemo, useState } from "react"

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

    const makeCapital = (tods) => {
        return tods.map(t => ({
            ...t,
            title: t.title.toUpperCase()
        }));
    }

    const capitalTodos = useMemo(() => {return makeCapital(todos)}, [todos]);

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
        {capitalTodos.map((tod) => <li key={tod.id}>{tod.title}</li>)}
    </>
}