import { useSelector } from "react-redux";


const Dashboard = () => {
    const data = useSelector((state) => state.user);

    return <p>{`This is Dashboard and we welcome ${data.username}`}</p>
}

export default Dashboard;
