import { Section, Container, Header, Text, TodoList, Form } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from 'reduxTodo/todosOps';
import { selectTodos } from 'reduxTodo/todosSlice';

export const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector(selectTodos);
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <Form />
          {todos.length ? (
            <TodoList />
          ) : (
            <Text textAlign="center">Create your first todo😉</Text>
          )}
        </Container>
      </Section>
    </>
  );
};
