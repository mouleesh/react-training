import { useRef, useState } from "react"

export default function Register(){
    const fullNameRef = useRef();

    const [packer, setPacker] = useState(["Gold", "Platinum", "Silver", "Gold"])

    const handleChange = () => {
        console.log(fullNameRef.current.value);
    }


    return <>
        <label>Full Name <input ref={fullNameRef} type="text" onChange={handleChange}/></label>
        <ul>
            {packer.map((pack, index) => {
                return <li key={index}>{pack}</li>
            })}
        </ul>
        
    </>
}