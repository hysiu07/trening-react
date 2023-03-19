import React, { useEffect, useState } from 'react';
import './Component2.css';

function Component2() {
	const [user, setUser] = useState([]);

	useEffect(() => {
		fetch('https://reqres.in/api/users?page=2')
			.then((res) => res.json())
			.then((data) => {
				setUser(data.data);
			});
	},[]);

	return (
		<div className='component2'>
			<h1>Component 2</h1>
			<h2>Fetch </h2>
			{user.map((user) => {
				return <p key={user.id}>{user.first_name}</p>;
			})}
		</div>
	);
}

export default Component2;
