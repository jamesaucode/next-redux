import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';

const TodoList: React.FunctionComponent = props => {
	const { todos } = useSelector((state: RootState) => state.todos);
	const dispatch = useDispatch();
	const [task, setTask] = useState('');

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTask(event.target.value);
	};

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		dispatch({ type: 'ADD_ITEM', payload: task });
		setTask('');
	};

	return (
		<div>
			<h1>Here's the todos</h1>
			<ul>
				{todos.map((todo, index) => (
					<li>{`${index}. ${todo}`}</li>
				))}
			</ul>
			<input type="text" value={task} onChange={handleChange} />
			<button onClick={handleClick}>Add</button>
		</div>
	);
};

export default TodoList;
