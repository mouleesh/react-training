import { memo, useCallback } from "react";
import { useSelector } from "react-redux";


const Dashboard = () => {
    const data = useSelector((state) => state.user);

    const handleClickMe = useCallback(() => {
        console.log("I am being clicked");
    }, [])

    return <>
        <p>{`This is Dashboard and we welcome ${data.username}`}</p>
        <button onClick={handleClickMe}>Click Me!</button>
    </>
}

export default memo(Dashboard);
