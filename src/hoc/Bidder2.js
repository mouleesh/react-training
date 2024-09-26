import React, { useState } from 'react'
import higherOrderCompnent from './redHoc';
import bidHoc from './bidHoc';

function Bidder2({value, handleDoubleIt}) {

    return (
        <div>
            <p>My name is Kumar and my value is ${value}. <button onClick={handleDoubleIt}>Double it!</button></p>
            
        </div>
    )
}

export default bidHoc(Bidder2)