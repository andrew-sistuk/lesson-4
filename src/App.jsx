import {
  Form,
  Section,
  Container,
  Header,
  TodoList,
  EditForm,
} from 'components';
import { useSelector } from 'react-redux';
import { getCurrentTodos } from 'reduxTodo/todosSlice';

export const App = () => {
  const curerentTodo = useSelector(getCurrentTodos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          {!curerentTodo ? <Form /> : <EditForm />}
          <TodoList />
          {/* <Text textAlign="center">Create your first todo😉</Text> */}
        </Container>
      </Section>
    </>
  );
};
