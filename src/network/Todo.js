import axios from "axios";
import { useEffect, useMemo, useState } from "react"
import { getTodosRedux } from "../redux/todoSlice";
import { useDispatch, useSelector } from "react-redux";
import { useApi } from "../hooks/useApi";

export default function Todo(){

    // const [todos, setTodos] = useState([]);
    const [todos] = useApi("https://jsonplaceholder.typicode.com/todos/");
    console.log(todos);
    // const {data: todosFromSlice} = useSelector((state) => state.todo) 

    
    const dispatch = useDispatch();

    // const getTodos = async () => {
    //     const response = await axios.get(url);
    //     setTodos(response.data);
    // }

    // useEffect(()=> {
    //     getTodos();

    //     dispatch(getTodosRedux());
    // }, [])

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