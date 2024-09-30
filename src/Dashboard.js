import { memo, useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ErrorBoundary from "./ErrorBoundary";

const Dashboard = () => {
    const data = useSelector((state) => state.user);

    const handleClickMe = useCallback(() => {
        console.log("I am being clicked");
    }, [])

    return <>
            <p>{`This is Dashboard and we welcome ${data.username}`}</p>
            <button onClick={handleClickMe}>Click Me!</button>
            <ErrorBoundary><Child /></ErrorBoundary>
        </>
        
}

export default memo(Dashboard);

const Child = ({name}) => {

    const [a, setA] = useState(1)

    const handleButtonClick = () => {
        setA(a + 1)
    }

    return <>
        {a > 5 ? name.u : null}
        <button onClick={handleButtonClick}> Click! </button>
    </>
       
}