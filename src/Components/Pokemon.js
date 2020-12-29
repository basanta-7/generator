import React, {useState, useEffect} from "react"
import axios from 'axios'

export default function Pokemon(){
	
	const [SelectedId,setSelectedId] = useState()
	const [name, setName] = useState()

	useEffect(() => {
		async function getData(){
			const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${SelectedId}`)
			// console.log(response.data.name);
			setName(response.data.name);
		}
		getData();
	})

	return(
		<div>
			{SelectedId ? <p>You Selected:  {SelectedId} </p> : <p>Select Pokemon ID</p> }
			<p>
				Its <span style={{color: "red"}}> {name} </span>
			</p>
			<select style={{width: '100px'}} onChange={(event) => {setSelectedId(event.target.value)}}>
				<option value="1">1</option>
				<option value="25">25</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="6">6</option>
			</select>
		</div>
	)
}