import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [task, setTask] = useState([]);
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
                 <button type="button" class="btn btn-primary float-end ms-auto btn-sm btn-pad">Add</button>
				
				</li>
				
				{task.map((item, index) => (
        
						 <li className="list-group-item d-flex align-items-center py-3">
						 <input className="form-check-input me-3" type="checkbox" value="" aria-label="" />
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

				<div className="list-group-item d-flex align-items-center py-3 t-counter">4 tasks</div>
				</ul>
				
		</div>
	);
};

export default Home;
