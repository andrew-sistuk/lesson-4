import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../reduxTodo/todosSlice';

export const Form = () => {
  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(addTodo(evt.target.elements.search.value));
  }
  
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
      />
    </form>
  );
};
