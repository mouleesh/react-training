import { useState } from "react";

const bidHoc = (OriginalComponent) => {
    return function HoC(props){
        const [value, setValue] = useState(10);

        const handleDoubleIt = () => {
            setValue(value * 2);
        }

        return <OriginalComponent 
            {...props}
            value={value} 
            handleDoubleIt={handleDoubleIt}/>
    }
}

export default bidHoc;