import { GridItem, Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';

import style from './Todo.module.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, addCurrentTodo } from 'reduxTodo/todosSlice';

export const Todo = ({ id, todoText, index }) => {
  const dispatch = useDispatch();
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {index + 1}
        </Text>

        <Text>{todoText}</Text>
        <button
          className={style.deleteButton}
          type="button"
          onClick={() => dispatch(deleteTodo(id))}
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button
          className={style.editButton}
          type="button"
          onClick={() => dispatch(addCurrentTodo({ id, todoText }))}
        >
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
