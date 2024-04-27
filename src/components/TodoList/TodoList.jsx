import { Grid, Todo } from 'components';
import { useSelector } from 'react-redux';
import { selectTodos } from 'reduxTodo/todosSlice';

export const TodoList = () => {
  const todos = useSelector(selectTodos);
  return (
    <>
      {!!todos.length && (
        <Grid>
          {todos.map(({ text, id }, idx) => {
            return <Todo text={text} key={id} id={id} idx={idx} />;
          })}
        </Grid>
      )}
    </>
  );
};
