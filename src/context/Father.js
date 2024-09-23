import { Child } from "./Child"

export const Father = ({asset}) => {
    return <>
        <p>{`I am Father`}</p>
        <Child asset={asset}/>
    </>
}