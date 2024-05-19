import { GridItem, Text } from 'components';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';


import style from './Todo.module.css';

export const Todo = ({ todoText, index }) => {
  return (
    <GridItem>
      <div className={style.box}>
        <Text textAlign="center" marginBottom="20">
          TODO # {index+1}
        </Text>

        <Text>{todoText}</Text>
        <button className={style.deleteButton} type="button">
          <RiDeleteBinLine size={24} />
        </button>
        <button className={style.editButton} type="button">
          <RiEdit2Line size={24} />
        </button>
      </div>
    </GridItem>
  );
};
