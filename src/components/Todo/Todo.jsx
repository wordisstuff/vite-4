import { GridItem, Text } from 'components';
import style from './Todo.module.css';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteTodo } from 'reduxTodo/todosOps';

export const Todo = ({ text, idx, id }) => {
  const dispatch = useDispatch();
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {idx}
        </Text>

        <Text>{text}</Text>
        <button
          className={style.deleteButton}
          onClick={() => dispatch(deleteTodo(id))}
          type="button"
        >
          <RiDeleteBinLine size={24} />
        </button>
        <button className={style.editButton} type="button">
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
