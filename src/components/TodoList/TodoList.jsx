import { Grid, Todo } from 'components';
import { useSelector } from 'react-redux';
import { getTodos } from 'reduxTodo/todosSlice';

export const TodoList = () => {
  const todos = useSelector(getTodos);
  return (
    <Grid>
      {todos.map((todo, index) => (
        <Todo key={todo.id} {...todo} index={index}/>
      ))}
    </Grid>
  );
};
