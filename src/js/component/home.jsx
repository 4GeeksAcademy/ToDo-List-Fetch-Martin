import React, { useEffect, useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [task, setTask] = useState([]);
	const s = task.length>1 ? "s" : "";

useEffect(() => {
	const request = async () => {
		const res = await fetch('https://playground.4geeks.com/apis/fake/todos/user/klassicstudio', {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
			  "Content-Type": "application/json"
			}
		  })
		  
		  const data = await res.json()
		  console.log(data)
	}
	request()

}, [])

useEffect(() => {
	const request = async () => {
		const res = await fetch('https://playground.4geeks.com/apis/fake/todos/user/klassicstudio')
		const data = await res.json()
		  console.log(data)
	}
	request()

}, [])
// Class Video at 38:02 
	return (
		<div className="container mt-3 text-center">
			<h1 className="mt-4">ToDo</h1>
			<h5 className="my-3">Task organizer</h5>
			<ul className="list-group d-flex align-items-center">
			<li className="list-group-item d-flex align-items-center py-3">
			     <input
				  id="taskInput"
				  type="text"
				  className="form-control me-5"
				  onChange={(e) => setInputValue(e.target.value)}
				  placeholder="Type your task"
				  value={inputValue}
				  onKeyUp={(e) => {
					if(e.key === "Enter") {
						setTask(task.concat(inputValue));
						setInputValue("");
					}
				  }}
				  aria-label="Recipient's username"/>
                 <button
				  type="button"
				  onClick={() => {
					setTask(task.concat(inputValue));
					setInputValue("");
				}}
				  className="btn btn-primary float-end ms-auto btn-sm btn-pad">
					Add
				 </button>
				 <button
				 type="button"
				 className="btn btn-secondary float-end ms-2 btn-sm btn-pad text-nowrap">
					Delete All
				 </button>
				
				</li>
				
				{task.map((item, index) => (
        
						 <li className="list-group-item d-flex align-items-center py-3">
						
						 {item}
						 <button
							type="button"
							onClick={() => {
								setTask(
									task.filter(
										(t, currentIndex) =>
										index != currentIndex
									)
								)
							}}
							className="btn btn-danger float-end ms-auto btn-sm">
							Delete
						 </button>
					 </li> 
                 ))}

				<div className="list-group-item d-flex align-items-center py-3 t-counter">{task.length} task{s} left</div>
				</ul>
				
		</div>
	);
};

export default Home;
