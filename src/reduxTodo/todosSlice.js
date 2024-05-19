import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    currentTodo: null,
  },
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(todoText) {
        return {
          payload: { id: nanoid(), todoText },
        };
      },
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    addCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    updateTodo: (state, action) => {
      state.items = state.items.map(todo => {
        return todo.id === state.currentTodo.id
          ? { ...state.currentTodo, todoText: action.payload }
          : todo;
      });
      state.currentTodo = null;
    },
  },
  selectors: {
    getTodos(state) {
      return state.items;
    },
    getCurrentTodos(state) {
      return state.currentTodo;
    },
  },
});

export const { addTodo, deleteTodo, addCurrentTodo, updateTodo } =
  todosSlice.actions;

export const { getTodos, getCurrentTodos } = todosSlice.selectors;

export default todosSlice.reducer;
