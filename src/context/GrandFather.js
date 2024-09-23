import { useState } from "react"
import { Father } from "./Father"
import { assetContext } from "./assetContext";

export const GrandFather = () => {
    const [asset, setAsset] = useState("diamond");

    return <>
        <assetContext.Provider value={asset}>
            <input value={asset} onChange={(e) => {setAsset(e.target.value)}} type="text"/>
            <p>{`I am Grand Father and I am owner of the ${asset}`}</p>
            <Father />
        </assetContext.Provider>
    </>
}