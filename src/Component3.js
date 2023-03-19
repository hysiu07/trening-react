import React from 'react';
import './Component3.css';
import { context  } from './App';

function Component3() {

	const value = React.useContext(context)

	return (

			<div className='component3'>
				<h1>Component 3</h1>
		{value}
			</div>
		
	);
}

export default Component3;
