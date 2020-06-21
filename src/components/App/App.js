import React, { useState, useEffect } from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

import styles from './App.module.css';

const App = () => {
	const initialState = {
		items: [
			{
				value: 'Встреча с клиентом',
				isDone: true,
				id: 1
			},
			{
				value: 'Подпись договора',
				isDone: true,
				id: 2
			},
			{
				value: 'Урок английского',
				isDone: false,
				id: 3
			}
		]
	};

	const [items, setItemList] = useState(initialState.items); 

	useEffect(() => {
		console.log('componentDidMount');
	}, []);
	
	useEffect(() => {
		console.log('componentDidUpdate');
  });

	const onClickAdd = value => {
		const newItemList = [
			...items,
			{
				value,
				isDone: false,
				id: items.length + 1
			}
		];
		setItemList(newItemList);
	};

	const onClickDone = id => {
		const newItemList = items.map(item => {
			const newItem = { ...item };
			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}
			return newItem;
		});
		setItemList(newItemList);
	};

	const onClickDelete = id => {
		const newItemList = items.filter(item => item.id !== id)
		setItemList(newItemList);
	};

	return (
  	<div className={styles.wrap}>
			<div>
				<h1 className={styles.header}>Важные дела:</h1>
				<InputItem onClickAdd={onClickAdd} />
				<ItemList
					items={items}
					onClickDone={onClickDone}
					onClickDelete={onClickDelete}
				/>
  			<Footer count={items.length} />
  		</div>
		</div>
	);
}



export default App;

