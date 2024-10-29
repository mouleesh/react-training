import React, { useState } from 'react'
import { useCounter } from './useCounter'

function Counter() {

    const [numb, increment, decrement] = useCounter();

    return (
        <div>
            <h3>Custom Hook Example</h3>
            <p>{`Current Value is: ${numb}`}</p>
            <button onClick={increment}> + </button>
            <button onClick={decrement}> - </button>
        </div>

    )
}

export default Counter
