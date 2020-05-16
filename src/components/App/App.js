import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

import styles from './App.module.css';

class App extends React.Component {

	state = {
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


	onClickDone = id => {
		const newItemList = this.state.items.map(item => {
			const newItem = { ...item };

			if (item.id === id) {
				newItem.isDone = !item.isDone;
			}

			return newItem;

		});

		this.setState({ items: newItemList });

	};

  render() {
    return (
    	<div className={styles.wrap}>
				<div>
  				<h1 className={styles.header}>Важные дела:</h1>
  				<InputItem />
  				<ItemList items={this.state.items} onClickDone={this.onClickDone} />
  				<Footer count={1} />
  			</div>
			</div>);	
	}
};



export default App;

