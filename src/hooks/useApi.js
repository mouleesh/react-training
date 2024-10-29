import axios from "axios";
import { useEffect, useState } from "react";

export const useApi = (url) => {
    const [todos, setData] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await axios.get(url);
            setData(response.data);
        })();

    }, []);

    return [todos];

}