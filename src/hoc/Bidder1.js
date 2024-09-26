import React, { useState } from 'react'
import makeRed from './redHoc';
import bidHoc from './bidHoc';

function Bidder1({value, handleDoubleIt}) {

    return (
        <div>
            <p>My name is Ram and my value is ${value}. <button onClick={handleDoubleIt}>Double it!</button></p>
        </div>
    )
}


export default bidHoc(makeRed(Bidder1))