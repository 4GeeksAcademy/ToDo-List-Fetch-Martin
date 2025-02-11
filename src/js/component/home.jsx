import React, { useEffect, useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [tasks, setTasks] = useState([]);
	const s = tasks.length>1 ? "s" : "";
	let counter = 1;

	const deleteAll = async () => {
		try {
			const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/tincho", {
				method: "DELETE",
			});
	
			if (res.ok) {
				setTasks([]);
			} else {
				console.error(`Failed to delete tasks. Status: ${res.status}`);
			}
		} catch (error) {
			console.error("Error deleting tasks:", error);
		}
	};

	const addTask = async () => {
		const newTask = {
			id: counter,
			done: false,
			label: inputValue
		}
		counter += 1;
		const newTasks = [...tasks, newTask]
		const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/tincho", {
				method: "PUT",
				body: JSON.stringify(newTasks),
				headers: {
					"Content-Type": "application/json"
				  }
			})
		setTasks(newTasks)
		setInputValue("");
	}

	const deleteTask = async (index) => {
		const reducedTask = [...tasks];
		reducedTask.splice(index, 1);
		
		const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/tincho", {
				method: "PUT",
				body: JSON.stringify(reducedTask),
				headers: {
					"Content-Type": "application/json"
				  }
			})
			setTasks(reducedTask);

	}

    // Creating the database for the assigned user
	useEffect(() => {
		const request = async () => {
			const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/tincho", {
				method: "POST",
				body: JSON.stringify([]),
				headers: {
					"Content-Type": "application/json"
				  }
			})
			const data = await res.json()
			console.log(data)
		}
		request();

	}, [])

    // Getting the data from the database
	useEffect(() => {
		const getDb = async () => {
			const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/tincho")
			const data = await res.json()
			setTasks(data)
			console.log('Get DB: ',data)
		}
		getDb();

	}, [])

	return (
		<div className="container mt-3 text-center">
			<h1 className="mt-4">ToDo</h1>
			<h5 className="my-3">Task organizer</h5>
			<ul className="list-group d-flex align-items-center">
			<li className="list-group-item d-flex align-items-center py-3">
			     <input
				  type="text"
				  className="form-control me-5"
				  onChange={(e) => setInputValue(e.target.value)}
				  placeholder="Type your task"
				  value={inputValue}
				  aria-label="Recipient's username"/>
                 <button
				  type="button"
				  onClick={addTask}
				  className="btn btn-primary float-end ms-auto btn-sm btn-pad">
					Add
				 </button>
				 <button
				  type="button"
				  onClick={deleteAll}
				  className="btn btn-secondary float-end ms-3 btn-sm btn-pad text-nowrap">
					Delete All
				 </button>
				
				</li>
				
				{tasks.map((data, index) => (
        
						 <li className="list-group-item d-flex align-items-center py-3"
						     key={`${data.id}`}
						 >
						
						{`${index + 1} - `} {data.label}
						 <button
							type="button"
							onClick={() => deleteTask(index)}
							className="btn btn-danger float-end ms-auto btn-sm">
							Delete
						 </button>
					 </li> 
                 ))}

				<div className="list-group-item d-flex align-items-center py-3 t-counter">{tasks.length} task{s} left</div>
				</ul>
				
		</div>
	);
};

export default Home;