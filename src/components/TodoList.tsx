import React, { useState } from 'react';
import { connect } from 'react-redux';

const TodoList = props => {
  const [task, setTask] = useState('');
  const handleChange = event => {
    setTask(event.target.value);
  };
  const handleClick = event => {
    event.preventDefault();
    props.dispatch({ type: 'ADD_ITEM', payload: task });
    setTask('');
  };
  return (
    <div>
      <h1>Here's the todos</h1>
      <ul>
        {props.todos.map((todo, index) => (
          <li>{`${index}. ${todo}`}</li>
        ))}
      </ul>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default connect(state => state)(TodoList);