import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [task, setTask] = useState([]);
	const s = task.length>1 ? "s" : "";

	return (
		<div className="container mt-3 text-center">
			<h1 className="mt-4">ToDo</h1>
			<h5 className="my-3">Task organizer</h5>
			<ul class="list-group d-flex align-items-center">
			<li class="list-group-item d-flex align-items-center py-3">
			     <input
				  type="text"
				  class="form-control me-5"
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
				  class="btn btn-primary float-end ms-auto btn-sm btn-pad">
					Add
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
