import { combineReducers } from 'redux';

const defaultState = {
	todos: ['lmao'],
};

const todoReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			return {
				...state,
				todos: state.todos.concat(action.payload),
			};
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
