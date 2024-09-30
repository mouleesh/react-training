import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
	return (<>
			<p>This is my Top Bar</p>
				<Outlet />
			<p>This is my footer bar</p>
	</>
	);
}

export default App;
