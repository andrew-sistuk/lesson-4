import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
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
  },
  selectors: {
    getTodos(state) {
      return state.items;
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;

export const { getTodos } = todosSlice.selectors;

export default todosSlice.reducer;
