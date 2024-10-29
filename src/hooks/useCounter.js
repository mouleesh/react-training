import { useState } from "react";

export const useCounter = () => {
    const [numb, setNumb] = useState(0);

    const increment = () => {
        setNumb(numb + 1);
    }

    const decrement = () => {
        setNumb(numb - 1);
    }

    return [numb, increment, decrement];
}