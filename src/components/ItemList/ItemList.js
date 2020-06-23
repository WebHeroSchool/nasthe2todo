import React from 'react';
import Item from '../Item/Item';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

import PropTypes from 'prop-types';
import styles from './ItemList.module.css';

const ItemList = ({ items, onClickDone, onClickDelete }) => (
  <ul className={styles.item_list}>
  {items.map(item => (
    <li 
      className={styles.todo_item}
      key={item.id}>
      <FormControlLabel
        control={
          <Checkbox 
            checked={item.isDone}
            color='default'  
            onClick={() => onClickDone(item.id)}
          />
        }
        label={
          <Item 
            value={item.value} 
            isDone={item.isDone} 
            id={item.id}
            isDeleted={item.isDeleted}
          />
        }
      />
    <DeleteOutlinedIcon onClick={() => onClickDelete(item.id)} />
    </li>
  ))}
  </ul>
);

ItemList.propTypes = {
	items: PropTypes.array,
	id: PropTypes.number,
	onClickDone: PropTypes.func.isRequired,
	onClickDelete: PropTypes.func.isRequired
};

export default ItemList;