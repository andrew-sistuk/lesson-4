import { Form, Section, Container, Header, TodoList } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          <TodoList />
          {/* <Text textAlign="center">Create your first todo😉</Text> */}
        </Container>
      </Section>
    </>
  );
};
