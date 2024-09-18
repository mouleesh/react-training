import logo from './logo.svg';
import './App.css';
import PTagComponent from './PTagComponent';
import { useState } from 'react';

function App() {
	const [fullName, changeFullName] = useState({
		firstName: "",
		lastName: ""
	});

	const handleChange = (e) => {
		changeFullName({
			...fullName,
			[e.target.name]: e.target.value
		});
	}

	return (
		<div className="App">
			<label> Frist Name: <input type="text" name="firstName" onChange={handleChange}/> </label>
			<label> Last Name: <input type="text" name="lastName" onChange={handleChange}/> </label>
			
			<PTagComponent 
				name={`${fullName.firstName} ${fullName.lastName}`} 
				age={26} 
			/>
		</div>
	);
}

export default App;
