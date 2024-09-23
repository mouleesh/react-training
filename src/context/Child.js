import { useContext } from "react"
import { assetContext } from "./assetContext"

export const Child = () => {
    const asset = useContext(assetContext)

    return <p>{`I am child and I am going to use that ${asset}`}</p>
}