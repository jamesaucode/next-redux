import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TodoState {
	todos: string[]
}

const initialState: TodoState = { todos: [] };

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<string>) {
			return {
				...state,
				todos: state.todos.concat(action.payload),
			}
		}
	}
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
