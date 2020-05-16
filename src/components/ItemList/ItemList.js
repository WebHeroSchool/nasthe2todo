import React from 'react';
import Item from '../Item/Item';

const ItemList = () => (<ul>
  <li><Item todoItem={'Встреча с клиентом'} /></li>
  <li><Item todoItem={'Подпись договора'} /></li>
  <li><Item todoItem={'Урок английского'} /></li>
</ul>);

export default ItemList;