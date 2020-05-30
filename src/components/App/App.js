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
				id: 1,
			},
			{
				value: 'Подпись договора',
				isDone: true,
				id: 2,
			},
			{
				value: 'Урок английского',
				isDone: false,
				id: 3,
			}
		],
		count: 3
	};

	onClickAdd = value => this.setState(state => ({
		items:[
			...state.items,
			{
				value,
				isDone: false,
				id: state.count + 1
			}
		],
		count: state.count + 1
	}));


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

	onClickDelete = id => this.setState(state => ({items: state.items.filter(item => item.id !== id)}));

  render() {
  	return (
    	<div className={styles.wrap}>
				<div>
					<h1 className={styles.header}>Важные дела:</h1>
					<InputItem onClickAdd={this.onClickAdd} />
					<ItemList
						items={this.state.items}
						onClickDone={this.onClickDone}
						onClickDelete={this.onClickDelete}
					/>
	  			<Footer count={1} />
	  		</div>
			</div>
		);
	}
};



export default App;

