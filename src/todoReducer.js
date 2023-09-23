import {GET_TODOS_SUCCESS, TODO_COMPLETE_CHANGE, TODO_TEXT_CHANGE} from "./todoActions";

export const reducer = (state, action) => {
    switch (action.type) {
        case TODO_TEXT_CHANGE: {
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id ? {...todo, text: action.text} : todo)
            };
        }
        case TODO_COMPLETE_CHANGE: {
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id ? {...todo, isComplete: action.isComplete} : todo)
            };
        }
        case GET_TODOS_SUCCESS: {
            return {
                ...state,
                todos: action.todos
            };
        }
        default: return state;
    }
}