import React,{ useState } from 'react';
import './Component4.css';

function Component4() {
    

    const [ name, setName] = useState([])


   const send = (e) => {
		e.preventDefault();
        console.log(name);
        


	};

   const inputValue = (e) =>{
    setName(e.target.value)
    }

	return (
		<div className='component4'>
			<h1>Component 4</h1>
			<form onSubmit={send}>
				<label>
					Imie:
					<input type='text' placeholder='wpisz imie' onChange={inputValue}  />
				</label>
				<input type='submit' value='Wyślij' />
			</form>
            <h2>{name}</h2>
		</div>
	);
}

export default Component4;
