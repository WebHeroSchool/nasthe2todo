import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';


const App = () => {

	const items = [
		{
			value: 'Встреча с клиентом'
		},
		{
  		value: 'Подпись договора'
  	},
  	{
  		value: 'Урок английского'
  	}
	];

	return (<div className={styles.wrap}>
		<div>
  		<h1>Важные дела:</h1>
  		<InputItem />
  		<ItemList items={items}/>
  		<Footer count={3} />
  	</div>
	</div>)
};

export default App;

