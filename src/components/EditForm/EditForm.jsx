import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCurrentTodo,
  getCurrentTodos,
  updateTodo,
} from 'reduxTodo/todosSlice';

export const EditForm = () => {
  const { todoText } = useSelector(getCurrentTodos);
  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(updateTodo(evt.target.elements.text.value));
  }

  function handleClick() {
    dispatch(addCurrentTodo(null));
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        defaultValue={todoText}
        autoFocus
      />
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={handleClick}>
        <MdOutlineCancel color="red" size="16px" />
      </button>
    </form>
  );
};
